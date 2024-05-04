import React from 'react';
import './style.css';
import Navlist from './components/Navlist';
import Navlogo from './components/Navlogo';
import image from './assets/logo.png';



const App = () => {
  const linkList = ["Home", "About", "Contact"];
  const handleLogin = () => {
    console.log('even login triggered');
  }

  const handleRedirect = (item) => {
    console.log(`event redirect to ${item}`);
  }

  return (
    <div className="Navbar-wrapper">
      <div className='Navbar'>
        <Navlogo logo={image}/>
        <Navlist data={linkList} handleRedirect={handleRedirect}/>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default App;