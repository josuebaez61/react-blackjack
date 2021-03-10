import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'

const PlayersTitles = ({name}) => {

  const { points: {player_points, ia_points} } = useSelector(({game: { score }}) => score);


    return (
        <h3 className="fontHeptaSlab playerTitles">
            {name} - <span className="badge badge-dark">{ name === "Jugador" ? player_points : ia_points }</span> <FontAwesomeIcon style={{fontSize:'1.3rem'}} icon={ faQuestionCircle }/>
        </h3>
    )
}

export default PlayersTitles

PlayersTitles.propTypes = {
    name: PropTypes.oneOf(['Jugador', 'Adversario'])
}

