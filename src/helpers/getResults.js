import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';

export const getResults = ( playerPoints, iaPoints, turn ) => {

    if ( turn === 'player' ) {
        if (playerPoints > 21 ) {
            Swal.fire({
                icon: 'error',
                title: '¡Perdiste esta ronda!',
                text: 'Obtuviste más de 21 puntos'
            })
            return false;
        }
    
        if ( playerPoints === 21 ) {
            Swal.fire({
                icon: 'success',
                title: '¡Ganaste esta ronda!',
                text: 'Obtuviste 21 puntos'
            })
            return true;
        }
    } else {
        if ( iaPoints === 21 ) {
            Swal.fire({
                icon: 'error',
                title: '¡Perdiste esta ronda!',
                text: 'Tu adversario obtuvo 21 puntos'
            })
            return false;
        }
        else if (playerPoints > 21 ) {
            Swal.fire({
                icon: 'error',
                title: '¡Perdiste esta ronda!',
                text: 'Obtuviste más de 21 puntos'
            })
            return false;
        }
        else if ( iaPoints > 21 ) {
            Swal.fire({
                icon: 'success',
                title: '¡Ganaste esta ronda!',
                text: 'Tu adversario obtuvo más de 21 puntos'
            })
            return true;
        }
        else if ( playerPoints === iaPoints ) {
            Swal.fire({
                icon: 'warning',
                title: '¡Empate!',
                text: 'Ambos jugadores obtuvieron la misma cantidad de puntos'
            });
            return false;
        }
        else if ( playerPoints < iaPoints ) {
            Swal.fire({
                icon: 'error',
                title: '¡Perdiste esta ronda!',
                text: 'Tu adversario obtuvo más puntos'
            })
            return false;
        }
        else if ( playerPoints > iaPoints ) {
            Swal.fire({
                icon: 'success',
                title: '¡Ganaste esta ronda!',
                text: 'Obtuviste más puntos que tu adversario'
            })
            return true;
        }
    }

    return null;
}