import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Notes from './components/Notes';
import CreateNotes from './components/CreateNote'

function App() {
  return (
    <>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/notes" element={<Notes/> }>
          
        </Route>

        <Route path="/create" element={<CreateNotes/> }>
          
        </Route>
      </Routes>
        

    </Router> 
    </>
    
  );
}

export default App;
