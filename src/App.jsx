import React from 'react'
import HomePage from './pages/HomePage'
import ChampionsLeague from './pages/ChampionsLeague';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/champions-league' element={<ChampionsLeague/>}/>
      
      </Routes>

    </Router>
  )
}

export default App