import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row align-items-center text-center">

        {/* Left Side - Logo and Heading */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="fw-bold">
            <span className="text-primary">Counter App</span> <br />
            <span className="text-dark">using <strong>React</strong></span>
          </h1>
          <img src="/vite.png" alt="React Logo" style={{ width: '120px', marginTop: '20px' }} />
        </div>

        {/* Right Side - Counter Card */}
        <div className="col-md-6">
          <div className="bg-white shadow-lg p-5 rounded" style={{ minWidth: '280px' }}>
            <h3 className="fw-bold mb-3">Counter App</h3>
            
            {/* Counter value */}
            <div className="display-3 fw-bold text-primary mb-4">{count}</div>

            {/* Buttons */}
            <div>
              {/* Increment + Decrement in the same row */}
              <div className="d-flex justify-content-center mb-3">
                <button
                  className="btn btn-primary mx-2 px-4 py-2 shadow"
                  onClick={() => setCount(count + 1)}
                >
                  Increment
                </button>
                <button
                  className="btn btn-info text-white mx-2 px-4 py-2 shadow"
                  onClick={() => setCount(count - 1)}
                >
                  Decrement
                </button>
              </div>

              {/* Reset button below */}
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-secondary px-4 py-2 shadow"
                  onClick={() => setCount(0)}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
