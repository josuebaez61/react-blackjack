import React from 'react';
import { useDispatch } from 'react-redux';
import { pickCard } from '../actions/gameActions';

const Deck = ({ deckcounter, playerwins }) => {

    const dispatch = useDispatch();
    
    const handleClick = () => {
        if (playerwins === null) {
            dispatch( pickCard('player') );
        }
    }

    return (
        <div className="game-aside__deck"> 
            <img onClick={ handleClick } className={ ( (playerwins !== null) || deckcounter <= 0 ) ? 'not-allowed img-disabled' : 'pointer' } src={ './assets/images/grey_back.png' } alt="deck"/>
            <span className="game-aside__cards-counter" style={ deckcounter <= 0 ? { color: 'red'} : { color: 'white'} } >{ deckcounter }</span>
        </div>
    )
}

export default Deck
