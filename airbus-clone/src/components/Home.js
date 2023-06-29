import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
          <Link to="home">Home</Link>
          <Link to="search-flights">Search Flights</Link>
          <Link to="checkout">Checkout</Link>
          <Link to="login">Login</Link>
    </div>
  )
}

export default Home;