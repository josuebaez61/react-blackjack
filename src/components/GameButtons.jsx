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
    e.target.disabled ? e.target.classList.add('notAllowed') : e.target.classList.remove('notAllowed')
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
        // dispatch( initGame() );
      }
    });

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
      <button onClick={ handleNewGame } type="button" className="btn btn-secondary" onMouseOver={ handleMouseOver }>
        Nueva Partida
      </button>
    </div>
  );
};

export default GameButtons;
