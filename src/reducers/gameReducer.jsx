import { types } from "../types/types";
import _ from "underscore";
import { getResults, showEndGameAlert } from "../helpers/getResults";
import { getCardValue } from "../helpers/getCardValue";
import { getRounds } from "../helpers/getRounds";

const createDeck = () => {
  let deck = [];
  const suits = ["C", "D", "H", "S"];
  const letters = ["A", "J", "Q", "K"];
  for (const suit of suits) {
    for (const letter of letters) {
      deck.push(letter + suit);
    }
    for (let i = 2; i <= 10; i++) {
      deck.push(i + suit);
    }
  }

  // deck = ["10C"];

  return deck;
};

const initialState = {
  deck: createDeck(),
  player_cards: [],
  ia_cards: [],
  turn: "player",
  score: {
    points: {
      player_points: 0,
      ia_points: 0,
    },
    rounds: {
      player_rounds: 0,
      ia_rounds: 0,
    },
    player_wins: null,
  },
};

export const gameReducer = (state = initialState, action) => {
  let cloneState = { ...state };

  switch (action.type) {
    case types.pickCard:
      const cardName = String(cloneState.deck.pop());
      let cardValue = getCardValue(cardName);

      const card = {
        name: cardName,
        value: cardValue,
      };

      let player_points = cloneState.score.points.player_points + cardValue;
      let ia_points = cloneState.score.points.ia_points;
      let results = getResults(
        player_points,
        cloneState["score"]["points"]["ia_points"],
        action.turn,
        cloneState["deck"].length
      );

      return {
        ...cloneState,
        player_cards: [...cloneState.player_cards, card],
        turn: action.turn,
        score: {
          ...cloneState.score,
          points: {
            player_points,
            ia_points,
          },
          rounds: getRounds(results, cloneState["score"]["rounds"]),
          player_wins: results,
        },
      };

    case types.changeTurn:
      return {
        ...state,
        turn: action.currentTurn === "player" ? "ia" : "player",
      };

    case types.execIATurn:
      let iaPoints = cloneState["score"]["points"]["ia_points"];
      let playerPoints = cloneState["score"]["points"]["player_points"];
      let ia_cards = [];
      if (cloneState.deck.length > 0) {
        while (iaPoints <= playerPoints) {
          if (cloneState.deck.length <= 0) {
            break;
          }
          const cardName = String(cloneState.deck.pop());
          let cardValue = getCardValue(cardName);
          const card = {
            name: cardName,
            value: cardValue,
          };
          ia_cards.push(card);
          iaPoints += cardValue;
        }
      }

      const iaTurnResults = getResults(
        playerPoints,
        iaPoints,
        cloneState["turn"],
        cloneState["deck"].length
      );
      return {
        ...cloneState,
        ia_cards,
        score: {
          ...cloneState.score,
          points: {
            player_points: playerPoints,
            ia_points: iaPoints,
          },
          rounds: getRounds(iaTurnResults, cloneState["score"]["rounds"]),
          player_wins: iaTurnResults,
        },
      };

    case types.endRound:
      return {
        ...state,
        ia_cards: [],
        player_cards: [],
        score: {
          ...state.score,
          points: {
            ia_points: 0,
            player_points: 0,
          },
          player_wins: null,
        },
      };

    case types.reset:
      return { ...initialState, deck: createDeck() };

    default:
      return state;
  }
};
