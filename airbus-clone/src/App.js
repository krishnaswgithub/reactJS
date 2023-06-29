import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="nav-bar">
          <Link to="home">Home</Link>
          <Link to="search-flights">Search Flights</Link>
          <Link to="checkout">Checkout</Link>
          <Link to="login">Login</Link>
        </div>
      ),
    },
    {
      path: "home",
      element: <div>This is Home Page</div>,
    },
    {
      path: "search-flights",
      element: <div>Search Flights Page</div>,
    },
    {
      path: "checkout",
      element: <div>Checkout Page</div>,
    },
    {
      path: "login",
      element: <div>Login Page</div>,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
