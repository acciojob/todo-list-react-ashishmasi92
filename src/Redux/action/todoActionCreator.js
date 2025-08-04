import { TODO_ADD,TODO_DEL,TODO_EDIT,TODO_SAVE } from "./actionType.js";





export function add_todo(arr){
return {
    type:TODO_ADD,
    payload:arr

}
}

export function del_todo(id){

    return {
        type:TODO_DEL,
        payload:id
    }
}

export function update_todo(id,update){

    return{
        type:TODO_EDIT,
        payload:{
            id:id,
            update
        }
    }

}
