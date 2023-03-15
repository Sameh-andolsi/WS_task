import { Button } from "bootstrap";
import { useState } from "react";
import { addTask } from "../../redux/action/action";
import { useDispatch } from "react-redux";
const AddTask = () => {
    const dispatch=useDispatch()
    const [newTask , setNewTask]=useState("")
    const handleChange =(e)=>{
        setNewTask(e.target .value )
    }
    const handleAdd =()=>{
        dispatch(addTask(newTask))
    }
  return (
    <div>
      <input type="text" placeholder="" />
      <Button variant="primary"> Add Task</Button>
    </div>
  );
};
export default AddTask;
