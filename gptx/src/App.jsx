import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Layout/Navbar";
import Hero from "./Components/Home/Hero";
import Features from "./Components/Home/Features";
import Testimonials from './Components/Home/Testimonials';
import Footer from "./Components/Layout/Footer";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Math from "./Courses/Math";
import Languages from './Courses/Languages';
import Dashboard from "./Components/admin/Dashboard";
import StudentDashboard from "./Components/Student/StudentDashboard";
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
            <Route path="/courses" element={<Math/>}/>
            <Route path="/languages" element={<Languages/>}/>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/student" element={<StudentDashboard />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;