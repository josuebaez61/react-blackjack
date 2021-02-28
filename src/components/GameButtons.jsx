import React, { useEffect, useState } from "react";
import { createSelectorHook, shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeTurn, execIATurn, pickCard, startPickCard } from "../actions/gameActions";

const GameButtons = () => {

  let { deck, score: { points: { player_points, ia_points } } } = useSelector(({game}) => game);
  // const { deck, points: { player_points, ia_points } } = useSelector(({game: { score }}) => score);
  const dispatch = useDispatch();

useEffect(() => {
  console.log(ia_points);
  return () => {
    
  }
}, [ia_points])

  const endTurn = () => {
    dispatch( changeTurn('player') );      
    dispatch( execIATurn() );      
  }

  return (
    <div className="btn-group-vertical mt-3">
      <button type="button" className="btn btn-secondary">
        Tomar Carta { ia_points }
      </button>
      <button onClick={ endTurn } type="button" className="btn btn-secondary">
        Pasar Turno
      </button>
      <button type="button" className="btn btn-secondary">
        3
      </button>
      <button type="button" className="btn btn-secondary">
        4
      </button>
    </div>
  );
};

export default GameButtons;
