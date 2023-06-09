import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HotelDetails from './containers/HotelDetails';
import Login from './containers/Login';

function App() {
  return (
    <div className="">
      {/* Layout of the Page */}
      <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="/hotel-details/:slug" element={<HotelDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
