import React from 'react';
import './App.css'; // Make sure to create appropriate styles in App.css


const App = () => {

  return (
    <div className="App">
      <div className="content-box">
        <h1>DARE TO DREAM</h1>
        <p>Noorishment</p>
        <button onClick={() => window.open('https://buy.stripe.com/bIYeWOdzWbrFgvK000', '_blank')}>
  Secure your merch today
</button>
      </div>
    </div>
  );
}

export default App;