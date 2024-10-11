import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
     
        <Route path="/profile" element={<Profile />} />
        
        {/* Catch-all route for unmatched URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
