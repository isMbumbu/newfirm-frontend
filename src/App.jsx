import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DocumentUpload from './CaseManagement/DocumentUpload.jsx';
import CaseDetails from './CaseManagement/CaseDetails.jsx';
import TaskList from './CaseManagement/TaskList';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import UserDashboard from './pages/user.jsx';
import UserManagement from './pages/UserManagement.jsx';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/document" element={<DocumentUpload />} />
              <Route path="/case/upload" element={<DocumentUpload />} />
              <Route path="/case/details" element={<CaseDetails />} />
              <Route path="/case/tasks" element={<TaskList />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/adminDashboard" element={<AdminDashboard />} />
              <Route path="/UserDashboard" element={<UserDashboard/>} />
              <Route path="/UserManagement" element={<UserManagement/>} />
            </Routes>
          </MainContent>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
