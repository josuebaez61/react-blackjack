import React from "react";
import { Link } from "react-router-dom";
import GameTitle from "../../components/GameTitle";
import Rules from "../../components/Rules";

const HomeScreen = () => {
  return (
    <div className="main__box main__box--home">
      <div>
        <GameTitle/>
        <header>
          <nav>
            <ul className="menu">
              <li>
                <Link to="/ingame">Nueva Partida</Link>
              </li>
              {/* <li>
                <Rules/>
              </li> */}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default HomeScreen;
