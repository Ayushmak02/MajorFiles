

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './home';
import EEG from './EEG';
import Score from './Score';
import ADHD from './ADHD';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/eeg" element={<EEG />} />
          <Route path="/score" element={<Score />} />
          <Route path="/adhd" element={<ADHD />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

