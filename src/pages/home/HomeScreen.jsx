import React from "react";
import { Link } from "react-router-dom";
import GameTitle from "../../components/atoms/GameTitle";

const HomeScreen = () => {
  return (
    <div className="main__box main__box--home">
      <div>
        <GameTitle/>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/ingame">Nueva Partida</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default HomeScreen;
