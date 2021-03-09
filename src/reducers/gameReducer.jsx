import { types } from "../types/types";
import _ from "underscore";
import { getResults, showEndGameAlert } from "../helpers/getResults";
import { getCardValue } from "../helpers/getCardValue";
import { getRounds } from "../helpers/getRounds";
import { Card } from "../classes/Card";

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
  let {
    deck,
    turn,
    player_cards,
    score,
    score: {
      points,
      points: {
        player_points: player_points_state,
        ia_points: ia_points_state,
      },
      rounds,
    },
  } = cloneState;

  switch (action.type) {
    case types.pickCard:
      const cardName = String(deck.pop());
      const cardValue = getCardValue(cardName);
      const card = new Card(cardName, cardValue);
      const player_points = player_points_state + cardValue;
      const ia_points = ia_points_state;
      const results = getResults(player_points, ia_points, turn, deck.length);

      return {
        ...state,
        player_cards: [...player_cards, card],
        deck: [...deck],
        turn: action.turn,
        score: {
          ...score,
          points: {
            player_points,
            ia_points,
          },
          rounds: getRounds(results, rounds),
          player_wins: results,
        },
      };

    case types.changeTurn:
      return {
        ...state,
        turn: action.currentTurn === "player" ? "ia" : "player",
      };

    case types.execIATurn:
      let iaPoints     = ia_points_state;
      let playerPoints = player_points_state;
      let ia_cards = [];
      if (deck.length > 0) {
        while (iaPoints <= playerPoints) {
          if (deck.length <= 0) break;
          const cardName = String(deck.pop());
          const cardValue = getCardValue(cardName);
          const card = new Card(cardName, cardValue);
          ia_cards.push(card);
          iaPoints += cardValue;
        }
      }
      const iaTurnResults = getResults(
        playerPoints,
        iaPoints,
        turn,
        deck.length
      );

      return {
        ...state,
        ia_cards,
        deck: [...deck],
        score: {
          ...score,
          points: {
            player_points: playerPoints,
            ia_points: iaPoints,
          },
          rounds: getRounds(iaTurnResults, rounds),
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
