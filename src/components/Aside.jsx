import React from 'react'
import Deck from './Deck'
import GameButtons from './GameButtons'

const Aside = () => {
    return (
        <aside className="game-aside">
            <Deck/>
            <GameButtons/>
        </aside>
    )
}

export default Aside
