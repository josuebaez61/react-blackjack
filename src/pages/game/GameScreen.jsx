import React from "react";
import Aside from "../../components/Aside";
import PlayerCards from "../../components/PlayerCards";

const GameScreen = () => {
  return (
    <div className="main__box">
      <div className="row no-gutters" style={{ height: "100%" }}>
        <div className="row col p-3">
          <div className="col-md-12">
            <h3>Cartas del jugador</h3>
                <PlayerCards/>
          </div>
          <div className="col-md-12">
            <h3>Cartas del adversario</h3>
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
