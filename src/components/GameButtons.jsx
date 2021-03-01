import React, { useEffect, useState } from "react";
import { createSelectorHook, shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeTurn, endRound, execIATurn, pickCard, startPickCard } from "../actions/gameActions";

const GameButtons = ({ deckcounter, playerwins }) => {

  // let { 
  //   score: { 
  //     playerwins
  //   } 
  // } = useSelector(({game}) => game);

  useEffect(() => {
    console.log('playerwins', playerwins)

  }, [playerwins])

  const dispatch = useDispatch();

  const handleChangeTurn = () => {
    console.log('playerwins', playerwins)

    dispatch( changeTurn('player') );      
    dispatch( execIATurn() );
  }

  const handleNextRound = () => {
    dispatch( changeTurn('ia') ); 
    dispatch( endRound() ); 
  }

  const handlePickCard = () => {
    dispatch( pickCard('player') );
  }

  const handleMouseOver = (e) => {
    e.target.disabled ? e.target.classList.add('notAllowed') : e.target.classList.remove('notAllowed')
  }

  return (
    <div className="btn-group-vertical mt-4">
      <button 
        onClick={ handlePickCard } type="button" className="btn btn-primary" 
        onMouseOver={ handleMouseOver }
        disabled={ (playerwins !== null) || (deckcounter <= 0) ? true : false  }
      >
        Tomar Carta
      </button>
      <button 
        onClick={ handleChangeTurn } type="button" className="btn btn-success" 
        onMouseOver={ handleMouseOver }
        disabled={ (playerwins !== null) || (deckcounter <= 0) ? true : false  }
      >
        Pasar Turno
      </button>
      <button 
        onClick={ handleNextRound } type="button" className="btn btn-warning" 
        onMouseOver={ handleMouseOver }
        disabled={ (playerwins === null) || (deckcounter <= 0) ? true : false }
      >
        Siguiente Ronda
      </button>
      <button type="button" className="btn btn-secondary" onMouseOver={ handleMouseOver }>
        Nueva Partida
      </button>
    </div>
  );
};

export default GameButtons;
