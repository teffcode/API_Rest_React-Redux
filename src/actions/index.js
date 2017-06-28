// acción que nos va a devolver un objeto de tipo SHOW_USERS
// cuyo contenido será un listado de usuarios

import axios from 'axios' // para peticiones http

export const SHOW_USERS = 'SHOW_USERS' 

export function showUsers(){ // action creator

    // el action creator nos devuelve una función
    // mirar en: https://github.com/gaearon/redux-thunk 

    return(dispatch, getState) => {

        // llamada asíncrona, necesitamos MIDDLEWARE
        axios.get('http://jsonplaceholder.typicode.com/users') 
            // cuando recibimos esta respuesta => 
            // lanza una acción de tipo SHOW_USERS (así lo definimos)
            .then((response) => {
                dispatch({ type: SHOW_USERS, payload: response.data})
            })
    }
} 