import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to="/game">
        <h2>トランプ足し算ゲームへ</h2>
      </Link>
      <Link to="/manual">
        <h3>あそびかた</h3>
      </Link>
    </>
  );
};

export default Home;
