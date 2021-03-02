import React, { useEffect, useState } from "react";
import { createSelectorHook, shallowEqual, useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { changeTurn, endRound, execIATurn, initGame, pickCard, reset, startPickCard } from "../actions/gameActions";

const GameButtons = ({ deckcounter, playerwins }) => {

  const dispatch = useDispatch();

  const handleChangeTurn = () => {
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
    e.target.disabled ? e.target.classList.add('not-allowed') : e.target.classList.remove('not-allowed')
  }

  const handleNewGame = () => {

    Swal.fire({
      icon: 'question',
      title: '¿Está seguro de iniciar una nueva partida?',
      text: 'Se reiniciará el marcador y la baraja',
      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    }).then( ( {isConfirmed} ) => {
      if ( isConfirmed ) {
        dispatch( reset() );
      }
    });
  }

  return (
    <div className="btn-group-vertical mt-3">
      <button 
        onClick={ handlePickCard } type="button" className="btn btn-primary game-button" 
        onMouseOver={ handleMouseOver }
        disabled={ (playerwins !== null) || (deckcounter <= 0) ? true : false  }
      >
        Tomar Carta
      </button>
      <button 
        onClick={ handleChangeTurn } type="button" className="btn btn-success game-button" 
        onMouseOver={ handleMouseOver }
        disabled={ (playerwins !== null) || (deckcounter <= 0) ? true : false  }
      >
        Pasar Turno
      </button>
      <button 
        onClick={ handleNextRound } type="button" className="btn btn-warning game-button" 
        onMouseOver={ handleMouseOver }
        disabled={ (playerwins === null) || (deckcounter <= 0) ? true : false }
      >
        Siguiente Ronda
      </button>
      <button onClick={ handleNewGame } type="button" className="btn btn-secondary game-button" onMouseOver={ handleMouseOver }>
        Nueva Partida
      </button>
    </div>
  );
};

export default GameButtons;
