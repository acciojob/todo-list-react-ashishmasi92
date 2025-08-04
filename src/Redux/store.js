import {createStore} from "redux"
import todoReducer from "./reducer/todoReducer.js"


const store = createStore(todoReducer)


export default store