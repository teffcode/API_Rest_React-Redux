import { SHOW_USERS } from '../actions'

const initialState ={
    list: []
}

export function showUsers(state = initialState, action){

    switch(action.type) { // si la acción es de tipo SHOW_USERS
        case SHOW_USERS:
            // retorna un nuevo estado
            // esto es de REDUX
            return Object.assign({}, state, {list: action.payload})
        default:
            return state
    }

}