//import logo from './logo.svg';
import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import { HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import View from './View';
import Add from './Add';
import About from './About';
import Count from './Count';


function App() {
  const [todos, setTodos] = useState([]) ;

  const updateList = (task) => {
    setTodos((prevTodoList)=>{
      return[...prevTodoList, task];
    });
    localStorage.setItem("list",JSON.stringify([...todos,task]));
  };
  useEffect(() => {
    const listContents = localStorage.getItem("list");
    setTodos(JSON.parse(listContents) || []);
  }, []);



  return (
    <Router>
<Navbar>
   <Navbar.Brand>EarthCare</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-nav-nav"></Navbar.Toggle>
   <Navbar.Collapse className="nav-link">
     <Nav>
     <Link className="nav-link" to="/">
         Home
       </Link>
       <Link className="nav-link" to="/view">
         Posts
       </Link>
       <Link className="nav-link" to="/add">
         Sign up
       </Link>
     </Nav>
   </Navbar.Collapse>
 </Navbar>

    <Container>

      <Routes>
      <Route path="/add" element={
        
      
      
     <Add  
       submitHandler={(task)=>{
        updateList(task);
      }}
      />} />
       
       <Route exact path="/view" element={

     <View activeTodoArray={todos}  />
    }/>
     <Route exact path="/" element={
       <>
      <About />
      
      <Count />
      </>

    }/>
     <Route path="/">Error: 404 not found</Route>
     </Routes>

   </Container> 
   
 </Router>
  );
}

export default App;
