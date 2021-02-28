import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setPlayerPoints } from '../actions/scoreActions';

const PlayerCards = () => {

    const { game: { card } } = useSelector(state => state);
    const dispatch = useDispatch();

    const [cards, setCards] = useState([]);

    useEffect(() => {
        card.value && 
            setCards((state) => [...state, card])
            dispatch(setPlayerPoints(card.value));
            console.log('cards', cards);
        return () => {
            // cleanup
        }
    }, [card])

    return (
        <div className={ cards.length > 10 ? "in-game-cards in-game-cards--stacked" : "in-game-cards" }>
            {
                cards.length > 0 && 
                cards.map( card => {
                    return (<img key={card.name} src={ './assets/images/' + card.name + '.png' } alt={card.name} />)
                })
            }
        </div>
    )
}

export default PlayerCards
