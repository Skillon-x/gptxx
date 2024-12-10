import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Layout/Navbar";
import Hero from "./Components/Home/Hero";
import Features from "./Components/Home/Features";
import Testimonials from './Components/Home/Testimonials';
import Footer from "./Components/Layout/Footer";
import SignUp from './pages/SignUp';
import Login from './pages/Login';

// Create a Home component that combines Hero and Testimonials
const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;