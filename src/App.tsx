import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
      </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
