import { Button } from "bootstrap";
import{ Task }from "../Task/Task";
import { useSelector } from 'react-redux';
const ListTask = () => {
  const tasksList = useSelector((state) => state.taskReducer.tasksList);
  return (
    <div>
      <div>
        <Button variant="outline-primary">filter by done </Button>{" "}
        <Button variant="outline-secondary">filter by not done </Button>{" "}
        <Button variant="outline-success">Reset</Button>{" "}
      </div>
      <div>
       {tasksList.map((task)=> <task task ={task}/>)}
      </div>
    </div>
  );
};
export default ListTask;
