import React from 'react';

import education1 from '../templates/education_1.jpg';
import education2 from '../templates/education_2.jpg';
import education3 from '../templates/education_3.jpg';
import education4 from '../templates/education_4.jpg';

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

      <div className="education-template-block1">
        <div className="edcation-template1">
          <img src={education1} alt="Education Template 1" />
          <button type="button">Select</button>
        </div>
        <div className="edcation-template2">
          <img src={education2} alt="Education Template 2" />
          <button type="button">Select</button>
        </div>
        <div className="edcation-template3">
          <img src={education3} alt="Education Template 3" />
          <button type="button">Select</button>
        </div>
      </div>

      <div className="education-template-block2">
        <div className="edcation-template4">
          <img src={education4} alt="Education Template 4" />
          <button type="button">Select</button>
        </div>
        <div className="edcation-template5">
          <img src={education4} alt="Education Template 5" />
          <button type="button">Select</button>
        </div>
        <div className="edcation-template6">
          <img src={education4} alt="Education Template 6" />
          <button type="button">Select</button>
        </div>
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
    </>
  );
};

export default Home;
