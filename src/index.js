import React from 'react';
import ReactDOM from 'react-dom/client';
import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';


function App(){
  return(
    <div>
      <h1>Enter Your Password</h1>
      <Keypad />
      <EyesOnMe/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

