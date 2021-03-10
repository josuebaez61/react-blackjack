import React from "react";
import { useSelector } from "react-redux";
import Aside from "../../components/Aside";
import GameButtons from "../../components/GameButtons";
import PlayerCards from "../../components/PlayerCards";
import PlayersTitles from "../../components/PlayersTitles";

const GameScreen = () => {

  let { 
    deck,
    turn,
    score: { 
      player_wins,
      rounds
    } 
  } = useSelector(({game}) => game);

  return (
      <div className="row no-gutters justify-content-center" style={{ height: "100%", width: "100%" }}>
        <div className="row col pr-2 pl-2 p-md-3" style={{ height: "100vh" }}>
          <div className="col-md-12 d-md-none d-flex justify-content-center mb-2">
            <GameButtons playerwins={ player_wins } deck={ deck }/>
          </div>
          <div className="col-md-12 card-column">
            <PlayersTitles name="Jugador"/>
            <PlayerCards cardsProp={ 'player_cards' } />
          </div>
          <div className="col-md-12 card-column">
            <PlayersTitles name="Adversario"/>
            <PlayerCards cardsProp={ 'ia_cards' } />
          </div>
        </div>
        <div className="col-md-auto d-none d-md-block" style={{ height: "100%" }}>
          <Aside />
        </div>
      </div>
  );
};

export default GameScreen;
