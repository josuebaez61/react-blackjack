import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from '@fortawesome/free-brands-svg-icons';

const GameTitle = () => {
    return (
        <h1 className="game-title">BlackJack<FontAwesomeIcon className="blue-react" icon={ faReact } /></h1>
    )
}

export default GameTitle;
