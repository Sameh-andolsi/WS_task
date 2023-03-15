import { v4 as uuidv4 } from "uuid";
import { ADD_Task } from "../constants/action-type";
const initialState = {
  tasksList: [
    {
      id: uuidv4(),
      description: "fdcxs",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "frds",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "frds",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "fds",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "gtrfds",
      isDone: false,
    },
  ],
};

function taskReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_Task :
        return{
            tasksList:[...state.tasksList,payload]
        }
    default:
      return state;
  }
}
export default taskReducer;
