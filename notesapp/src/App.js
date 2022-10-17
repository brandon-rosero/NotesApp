import React from 'react'
import Home from './components/Home'
import CreateNote from './components/CreateNote'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/create' element={<CreateNote/>} />
      </Routes>
    </Router>
  );
}

export default App;
