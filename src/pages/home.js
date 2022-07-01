import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="instruction">
        <p>
          Select a template below for your image. There are five themes and each theme has 6 templates. Click "Select"
          to continue.
        </p>
      </div>

      <div className="education">
        <p>Theme - Education</p>
      </div>
      <div className="technology">
        <p>Theme - Technology</p>
      </div>
      <div className="entertainment">
        <p>Theme - Entertainment</p>
      </div>
      <div className="finance">
        <p>Theme - Finance</p>
      </div>
      <div className="environment">
        <p>Theme - Environment</p>
      </div>
      {/* <div className="Button">
        <button type="button">Select</button>
      </div> */}
    </>
  );
};

export default Home;
