import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

function View(props){
    const buildRows = () =>  {
    return props.activeTodoArray.map((current) => (
      <tr key={current.id}>
        <td>
          {current.id}
        </td>
        <td>
          {current.task}
        </td>
        <td>
          {current.completed ? "yes" : "no"}
        </td>
      </tr>
    )
    );
  };


    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>UserID</th>
              <th>Email</th>
              <th>Sign up ?</th>
            </tr>
          </thead>
          <tbody>
            {buildRows()}
          </tbody>
        </Table>
      </>
    );

}
export default View;
