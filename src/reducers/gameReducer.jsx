import { types } from "../types/types";
import _ from 'underscore';
import { useDispatch } from "react-redux";

const initialState = {
    deck: [],
    card: {
        name: null,
        value: null
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
            let cardValue = Number();

            if ( cardName.length === 2 ) {
                const firstChart = cardName.substring(0,1);
                switch (firstChart) {
                    case 'A':
                        cardValue = 11;
                        break;
                    case 'J':
                        cardValue = 10;
                        break;
                    case 'Q':
                        cardValue = 10;
                        break;
                    case 'K':
                        cardValue = 10;
                        break;
                    default:
                        cardValue = Number(cardName.substring(0,1));
                        break;
                }
            } else {
                cardValue = Number(cardName.substring(0,2));
            }

            const card = {
                name: cardName,
                value: cardValue
            }

            return {...copyState, card};
    
        default:
            return state;
    }
}