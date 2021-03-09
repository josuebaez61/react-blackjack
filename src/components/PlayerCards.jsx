import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PlayerCards = ({cardsProp}) => {
    const { game: { player_cards, ia_cards, turn } } = useSelector(state => state);
    
    return (
        <div className={ eval(cardsProp).length > 10 ? "in-game-cards in-game-cards--stacked" : "in-game-cards" }>
            {
                eval(cardsProp).length > 0 && 
                eval(cardsProp).map( card => {
                    // Si la carta invocada es AD, la imagen es bloqueada por los AD block debido al nombre "AD.png", por esta razon se cambio el nombre original por
                    // "A_D.png", asi que controlamos esta excepcion mediante ((card.name === 'AD') ? 'A_D' : card.name)
                    // return (<img key={card.name} src={ './assets/images/' + ((card.name === 'AD') ? 'A_D' : card.name)  + '.png' } alt={card.name} />)
                    return (<img key={card.name} src={ require('../assets/images/'+ ((card.name === 'AD') ? 'A_D' : card.name)  + '.png').default  } alt={card.name} />)
                })
            }
        </div>
    )
}

export default PlayerCards
