import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/Portfolio';  // Import the Portfolio component

function App() {
  return (
    <div className="App">
      {/* Render the Portfolio component */}
      <Portfolio />
    </div>
  );
}

export default App;
