import React from 'react';
import { useNavigate } from 'react-router-dom';

import education1 from '../templates/education_1.jpg';
import education2 from '../templates/education_2.jpg';
import education3 from '../templates/education_3.jpg';
import education4 from '../templates/education_4.jpg';
import education5 from '../templates/education_5.jpg';
import education6 from '../templates/education_6.jpg';
import './education.css';

const Education = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="education">
        <p>Theme - Education</p>
      </div>

      <div className="education-template-block1">
        <div className="edcation-template1">
          <img src={education1} alt="Education Template 1" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: education1 } })}>
            Select
          </button>
        </div>

        <div className="edcation-template2">
          <img src={education2} alt="Education Template 2" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: education2 } })}>
            Select
          </button>
        </div>

        <div className="edcation-template3">
          <img src={education3} alt="Education Template 3" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: education3 } })}>
            Select
          </button>
        </div>
      </div>

      <div className="education-template-block2">
        <div className="edcation-template4">
          <img src={education4} alt="Education Template 4" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: education4 } })}>
            Select
          </button>
        </div>

        <div className="edcation-template5">
          <img src={education5} alt="Education Template 5" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: education5 } })}>
            Select
          </button>
        </div>

        <div className="edcation-template6">
          <img src={education6} alt="Education Template 6" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: education6 } })}>
            Select
          </button>
        </div>
      </div>
    </>
  );
};

export default Education;
