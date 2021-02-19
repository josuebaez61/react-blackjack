import React from "react";

const GameButtons = () => {
  return (
    <div className="btn-group-vertical mt-3">
      <button type="button" className="btn btn-secondary">
        Tomar Carta
      </button>
      <button type="button" className="btn btn-secondary">
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
