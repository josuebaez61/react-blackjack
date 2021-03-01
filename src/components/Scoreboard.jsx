import React from "react";

const Scoreboard = ({rounds:{ player_rounds, ia_rounds }}) => {

  return (
    <div>
      <table className="scoreboard mt-2">
        <tbody>
          <tr>
            <td>{player_rounds}</td>
            <td>{ia_rounds}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Jugador</th>
            <th>Adversario</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Scoreboard;
