import { ADD_Task } from "../constants/action-type";

export const addTask =(payload)=> {
    console.log(payload)
return{
    type:ADD_Task,
    payload:payload,
};

};