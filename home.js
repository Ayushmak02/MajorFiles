import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Welcome to NeuroScan</h1>
              <h2 className="card-title text-center mb-4">Select the test type: </h2>
              <div className="d-grid gap-3">
                <Link to="/eeg" className="text-decoration-none">
                  <button className="btn btn-primary btn-lg">EEG Data</button>
                </Link>
                <Link to="/score" className="text-decoration-none">
                  <button className="btn btn-success btn-lg">Score Data</button>
                </Link>
                </div>
                <h2 className="card-title text-center mb-4"> NeuroScan Prompt </h2>
                <div className="d-grid gap-3">
                <Link to="/adhd" className="text-decoration-none">
                  <button className="btn btn-danger btn-lg">ADHD Prompt</button>
                </Link>

                <Link to="/" className="text-decoration-none">
                  <button className="btn btn-secondary btn-lg">Log Out</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
