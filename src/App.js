import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  )
}


export default App;
