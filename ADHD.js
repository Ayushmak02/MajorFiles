
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Score() {
//   return (
//     <div>
//       <h1>Physical Examination </h1>
//       <iframe
//   src="https://randomadhd-68nbtf8cy9yvj33hzj4vrw.streamlit.app/?embedded=true"
//   height="800"
//   style={{ width: "100%", border: "none" }}
// ></iframe>
// <div className="mt-4">
//         <Link to="/home" className="btn btn-primary">Go to Home</Link>
//       </div>
//     </div>
//   );
// }

// export default Score;

import React from 'react';
import { Link } from 'react-router-dom';

function Score() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Prompt</h1>
              <div className="embed-responsive embed-responsive-16by9 mb-4">
                <iframe
                  className="embed-responsive-item"
                  src="https://majorchatbot-3etbwznc9n3yctvat6ngcb.streamlit.app/?embedded=true"
                  height="800"
                  style={{ width: "100%", border: "none" }}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-center">
                <Link to="/home" className="btn btn-primary btn-lg">Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Score;


