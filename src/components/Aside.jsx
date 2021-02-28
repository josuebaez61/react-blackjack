import React from 'react'
import Deck from './Deck'
import GameButtons from './GameButtons'
import Scoreboard from './Scoreboard'

const Aside = () => {
    return (
        <aside className="game-aside">
            <Scoreboard/>
            <Deck/>
            <GameButtons/>
        </aside>
    )
}

export default Aside
