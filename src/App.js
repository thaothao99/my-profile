import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRouter from './pages';

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <AppRouter></AppRouter>
      </HashRouter>
    </div>
  )
}


export default App;
