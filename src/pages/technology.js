import React from 'react';
import { useNavigate } from 'react-router-dom';

import technology1 from '../templates/technology_1.jpg';
import technology2 from '../templates/technology_2.jpg';
import technology3 from '../templates/technology_3.jpg';
import technology4 from '../templates/technology_4.jpg';
import technology5 from '../templates/technology_5.jpg';
import technology6 from '../templates/technology_6.jpg';
import './technology.css';

const Technology = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="technology">
        <p>Theme - Technology</p>
      </div>

      <div className="technology-template-block1">
        <div className="technology-template1">
          <img src={technology1} alt="Technology Template 1" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: technology1 } })}>
            Select
          </button>
        </div>

        <div className="technology-template2">
          <img src={technology2} alt="Technology Template 2" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: technology2 } })}>
            Select
          </button>
        </div>

        <div className="technology-template3">
          <img src={technology3} alt="Technology Template 3" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: technology3 } })}>
            Select
          </button>
        </div>
      </div>

      <div className="technology-template-block2">
        <div className="technology-template4">
          <img src={technology4} alt="Technology Template 4" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: technology4 } })}>
            Select
          </button>
        </div>

        <div className="technology-template5">
          <img src={technology5} alt="Technology Template 5" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: technology5 } })}>
            Select
          </button>
        </div>

        <div className="technology-template6">
          <img src={technology6} alt="Technology Template 6" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: technology6 } })}>
            Select
          </button>
        </div>
      </div>
    </>
  );
};

export default Technology;
