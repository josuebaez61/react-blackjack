import React from 'react';
import { useDispatch } from 'react-redux';
import { pickCard } from '../actions/gameActions';
import deckImg from '../assets/images/grey_back.png';

const Deck = ({ style_class }) => {

    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch( pickCard('player') );
    }

    return (
        <div className="game-aside__deck"> 
            <img onClick={ handleClick } src={ deckImg } alt="deck"/>
        </div>
    )
}

export default Deck
