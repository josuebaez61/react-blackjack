import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTurn, execIATurn } from '../actions/gameActions'
import Deck from './Deck'
import GameButtons from './GameButtons'
import Scoreboard from './Scoreboard'

const Aside = () => {

  let { 
    deck,
    turn,
    score: { 
      player_wins,
      rounds
    } 
  } = useSelector(({game}) => game);

  const dispatch = useDispatch();

  useEffect(() => {
    if ( turn === 'player' ) {
      if ( deck.length <= 0 ) {
        dispatch( changeTurn( 'player' ) );      
        dispatch( execIATurn() );
      }
    }
  }, [ deck.length ])

    return (
        <aside className="game-aside" >
            <Scoreboard rounds={ rounds }/>
            <Deck deck={ deck } playerwins={ player_wins }/>
            <GameButtons deck={ deck } playerwins={ player_wins }/>
        </aside>
    )
}

export default Aside
