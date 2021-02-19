import React from 'react';
import deckImg from '../assets/images/grey_back.png';

const Deck = ({ style_class }) => {


    return (
        <div className="game-aside__deck"> 
            <img src={ deckImg } alt="deck"/>
        </div>
    )
}

export default Deck
