import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ModulePage from './pages/ModulePage';
import ClassPage from './pages/ClassPage';

export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module/:moduleId" element={<ModulePage />} />
            <Route path="/module/:moduleId/class/:classId" element={<ClassPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
