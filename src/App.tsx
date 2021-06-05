import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
      </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
    </BrowserRouter>
  );
};

export default App;
