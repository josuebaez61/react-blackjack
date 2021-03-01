import React from "react";
import Aside from "../../components/Aside";
import PlayerCards from "../../components/PlayerCards";
import PlayersTitles from "../../components/PlayersTitles";

const GameScreen = () => {

  return (
    <div className="main__box">
      <div className="row no-gutters" style={{ height: "100%" }}>
        <div className="row col p-3">
          <div className="col-md-12 h-50">
            <PlayersTitles name="Jugador"/>
            <PlayerCards cardsProp={ 'player_cards' } />
          </div>
          <div className="col-md-12 h-50">
            <PlayersTitles name="Adversario"/>
            <PlayerCards cardsProp={ 'ia_cards' } />
          </div>
        </div>
        <div className="col-md-auto" style={{ height: "100%" }}>
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
