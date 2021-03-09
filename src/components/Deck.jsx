import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pickCard } from '../actions/gameActions';
import deckImg from '../assets/images/grey_back.png';

const Deck = ({ deck, playerwins }) => {

    const dispatch = useDispatch();
    
    const handleClick = () => {
        if (playerwins === null) {
            dispatch( pickCard('player') );
        }
    }

    return (
        <div className="game-aside__deck"> 
            <img onClick={ handleClick } className={ ( (playerwins !== null) || deck.length <= 0 ) ? 'not-allowed img-disabled' : 'pointer' } src={ deckImg } alt="deck"/>
            <span className="game-aside__cards-counter" style={ deck.length <= 0 ? { color: 'red'} : { color: 'white'} } >{ deck.length }</span>
        </div>
    )
}

export default Deck
