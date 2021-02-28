import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';

export const evalRound = ( playerPoints, iaPoints, turn ) => {

    if ( turn === 'player' ) {
        if (playerPoints > 21 ) {
            Swal.fire({
                icon: 'error',
                title: '¡Perdiste esta ronda!',
                text: 'Obtuviste más de 21 puntos'
            })
        }
    
        if ( playerPoints === 21 ) {
            Swal.fire({
                icon: 'success',
                title: '¡Ganaste esta ronda!',
                text: 'Obtuviste 21 puntos'
            })
        }
    } else {

        if ( playerPoints < iaPoints ) {
            Swal.fire({
                icon: 'error',
                title: '¡Perdiste esta ronda!',
                text: 'Obtuviste más de 21 puntos'
            })
        }


    }
}