import { types } from "../types/types";
import _ from 'underscore';
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { evalRound } from "../helpers/evalRounds";
import { act } from "react-dom/test-utils";
import { getCardValue } from "../helpers/getCardValue";

const initialState = {
    deck: [],
    card: {
        name: null,
        value: null
    },
    turn: 'player',
    score: {
        points: {
            player_points: 0,
            ia_points: 0,
        },
        rounds: {
            player_rounds: 0,
            ia_rounds: 0
        },
    }
}

export const gameReducer  = ( state = initialState, action ) => {

    switch (action.type) {
        case types.initGame:
            const deck  = [];
            const suits = ['C','D','H','S'];
            const letters = ['A', 'J', 'Q', 'K'];
            for (const suit of suits) {     
                for (const letter of letters) {
                    deck.push(letter+suit);
                }
                for( let i = 2; i <= 10; i++ ) {
                    deck.push(i+suit);
                }
            }

            return {
                ...state,
                deck: _.shuffle(deck)
            };


        case types.pickCard:
            const copyState = {...state};
            const cardName = String(copyState.deck.pop());
            let cardValue = getCardValue(cardName);
            
            const card = {
                name: cardName,
                value: cardValue
            }

            let player_points;
            let ia_points;

            if ( action.turn === "player" ) {
                player_points = copyState.score.points.player_points + cardValue;
                ia_points     = copyState.score.points.ia_points;
                evalRound(player_points, copyState['score']['points']['ia_points'], action.turn );
            } else {
                player_points = copyState.score.points.player_points;
                ia_points     = copyState.score.points.ia_points + cardValue;
                evalRound(player_points, ia_points, action.turn );         
            }

            return {
                ...copyState, 
                card, 
                turn: action.turn,
                score: {
                    points: {
                        player_points,
                        ia_points,
                    }, 
                }
            };
            
        case types.changeTurn: 
            const newTurn = action.currentTurn === 'player' ? 'ia' : 'player';
            return {...state, turn: newTurn };
        
        case types.execIATurn:
            let iaPoints = {...state}['score']['points']['ia_points'];
            let playerPoints = {...state}['score']['points']['player_points'];
            const copyState2 = {...state};

            while (iaPoints < playerPoints) {
                const cardName = String(copyState2.deck.pop());
                let cardValue = getCardValue(cardName);
                iaPoints += cardValue;
                console.log('iaPoints', iaPoints, 'playerPoints', playerPoints)
            }


            return state;

        default:
            return state;
    }
}