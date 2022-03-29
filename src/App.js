import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Introduction from './Introduction/Introduction';
import Todos from './Todos/Todos';
import Feedback from './Feedback/Feedback';

function App() {
  return (
    <Router>
      <div className='wrapper allin'>
        <Navbar />


        <Routes>
          <Route exact path='/' element={<Introduction />} />
          <Route exact path='/todos' element={<Todos />} />
          <Route exact path='/feedback' element={<Feedback />} />
        </Routes>


        <Footer classname="footer" />
      </div>
    </Router>
  );
}

export default App;
