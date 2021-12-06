import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import ToggleButton from 'react-bootstrap/ToggleButton';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function Add(props){
    const [state, setState]= useState({
      id: 0,
      task: "",
      completed: false,
    });

    const submitHandler= (e) => {
          e.preventDefault();
          props.submitHandler(state);
          toastr.success("Signing up !")
          setState({
            id:0,
            task: "",
            completed: false,
          });
        };

        const handleChange = (event) => {
          const newState = {...state};
          if(event.target.name === "completed"){
            newState[event.target.name] = !state.completed;
          }else{
          newState[event.target.name] = event.target.value;
          }
          setState(newState);
        };

return(
  <div className="container">
    <Form onSubmit={(e) => submitHandler(e)}>
      <Form.Group controlId="taskID">
        <Form.Label>UserID</Form.Label>
        <Form.Control 
        
        name="id" 
        type="number" 
        value={state.id}
        onChange={(e)=>handleChange(e)}
        />
      </Form.Group>

      <Form.Group controlId="taskDescription">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        name="task"
        type="text" 
        value={state.task}
        onChange={(e)=>handleChange(e)}
         />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comments</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

      <Form.Group controlId="complete">
      
        <Form.Check 
        label="Sign up?"
        name="completed" 
        type="checkbox" 
        value={state.completed}
        onChange={(e)=>handleChange(e)}>
          
        </Form.Check>
        </Form.Group>

      <Button variant="primary" type="submit"> 
        Register
      </Button>

    </Form>
  </div>
);
}

export default Add;