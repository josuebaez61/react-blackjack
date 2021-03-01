import React from 'react';
import { useDispatch } from 'react-redux';
import { pickCard } from '../actions/gameActions';
import deckImg from '../assets/images/grey_back.png';

const Deck = ({ cardscounter }) => {

    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch( pickCard('player') );
    }

    return (
        <div className="game-aside__deck"> 
            {
                cardscounter > 0 ? 
                <img onClick={ handleClick } src={ deckImg } alt="deck"/> :
                <div className="game-aside__empty_deck">
                    Fin del juego
                </div>
            }
            <span className="game-aside__cards-counter">{ cardscounter }</span>
        </div>
    )
}

export default Deck
