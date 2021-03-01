import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Deck from './Deck'
import GameButtons from './GameButtons'
import Scoreboard from './Scoreboard'

const Aside = () => {

    
  let { 
    deck,
    score: { 
      player_wins,
      rounds
    } 
  } = useSelector(({game}) => game);

  useEffect(() => {
      console.log(rounds)
  }, [rounds])

    return (
        <aside className="game-aside" >
            <Scoreboard rounds={ rounds }/>
            <Deck cardscounter={ deck.length }/>
            <GameButtons deckcounter={ deck.length } playerwins={ player_wins }/>
        </aside>
    )
}

export default Aside
