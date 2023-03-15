import { useState } from "react";
import { Button ,Modal } from "bootstrap";
const Task =({task})=> {
    const [show,setShow]=useState(false);
    const handleClose =()=>setShow(false);
     const handleShow = () => setShow(true);

 return (
   <div>
     <h1>{task.description}</h1>
     <Button variant={task.isDone ? "outline-danger" : "outline-success"}>
       {task.isDone ? "Done" : "Undo"}
     </Button>
     <Button variant="outline-warning" onClick={handleShow}>
       Edit
     </Button>
     <Modal
       show={show}
       onHide={handleClose}
       className="modal-container"
       centred
     >
       <Modal.Header closeButton>
         <Modal.Title>Modal title</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <input type="task" placeholder="Edit task" />
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Close
         </Button>
         <Button variant="primary">Save changes</Button>
       </Modal.Footer>
     </Modal>
   </div>
 );
}
export default Task;