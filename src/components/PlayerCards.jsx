import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const PlayerCards = ({cardsProp}) => {

    const { game: { player_cards, ia_cards, turn } } = useSelector(state => state);

    return (
        <div className={ eval(cardsProp).length > 10 ? "in-game-cards in-game-cards--stacked" : "in-game-cards" }>
            {
                eval(cardsProp).length > 0 && 
                eval(cardsProp).map( card => {
                    return (<img key={card.name} src={ './assets/images/' + card.name + '.png' } alt={card.name} />)
                })
            }
        </div>
    )
}

export default PlayerCards
