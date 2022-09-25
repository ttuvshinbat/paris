import React from 'react';
import './App.css';
import MyNavbar from './Navbar';
import Login from "./Login"
import FaceBook from './FaceBook';


function App() {

  return (
    <div className='container'>
      <MyNavbar />,
      <Login />,
      <FaceBook />
    </div>

  );
}

export default App;
