import logo from './logo.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import TaxCont from './containers/taxCont';
import './App.css';

function App() {
  return (
  <div>
    <p>Please enter salary</p>
    <TaxCont />
  </div>
  );
}

export default App;
