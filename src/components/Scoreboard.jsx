import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Scoreboard = () => {

  const { player_points, ia_points } = useSelector(({score}) => score);
  const dispatch = useDispatch();

  useEffect(() => {
    // evalPlayerPoints(player_points).then((res) => {

    //     if ( res ) { 
    //         console.log('Se evaluo');
    //     }
    // });

    return () => {
    //   cleanup
    }
  }, [player_points, ia_points])

    return (
        <>
            
        </>
    )
}

export default Scoreboard
