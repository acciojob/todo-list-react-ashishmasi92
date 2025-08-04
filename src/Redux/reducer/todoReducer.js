import { TODO_ADD, TODO_DEL, TODO_EDIT } from "../action/actionType.js";




let initialState = {
    list: []
}



function todoReducer(state = initialState, action) {
console.log(action);

    switch (action.type) {

        case TODO_ADD:
            return {
                ...state,
                list: [...state.list, { ...action.payload }]

            }
        case TODO_DEL:
            return {
                list: state.list.filter((v) => {
                    return v.id !== action.payload
                })
            }

        case TODO_EDIT:
            return {
                ...state,
                list: state.list.map((v) => {
                    return v.id === action.payload.id ? { ...v, task: action.payload.update } : v
                })
            }
        default:
            return state


    }

}

export default todoReducer