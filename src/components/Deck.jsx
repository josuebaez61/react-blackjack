import React from 'react';
import { useDispatch } from 'react-redux';
import { pickCard } from '../actions/gameActions';
import deckImg from '../assets/images/grey_back.png';

const Deck = ({ deckcounter, playerwins }) => {

    const dispatch = useDispatch();
    
    const handleClick = () => {
        if (playerwins === null) {
            dispatch( pickCard('player') );
        }
    }

    return (
        <div className="game-aside__deck"> 
            {
                deckcounter > 0 ? 
                <img onClick={ handleClick } className={ ( playerwins !== null ) ? 'notAllowed' : 'pointer' } src={ deckImg } alt="deck"/> :
                <div className="game-aside__empty_deck">
                    Fin del juego
                </div>
            }
            <span className="game-aside__cards-counter">{ deckcounter }</span>
        </div>
    )
}

export default Deck
