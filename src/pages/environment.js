import React from 'react';
import { useNavigate } from 'react-router-dom';

import environment1 from '../templates/environment_1.jpg';
import environment2 from '../templates/environment_2.jpg';
import environment3 from '../templates/environment_3.jpg';
import environment4 from '../templates/environment_4.jpg';
import environment5 from '../templates/environment_5.jpg';
import environment6 from '../templates/environment_6.jpg';
import './environment.css';

const Environment = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="environment">
        <p>Theme - Environment</p>
      </div>

      <div className="environment-template-block1">
        <div className="environment-template1">
          <img src={environment1} alt="Environment Template 1" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: environment1 } })}>
            Select
          </button>
        </div>

        <div className="environment-template2">
          <img src={environment2} alt="Environment Template 2" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: environment2 } })}>
            Select
          </button>
        </div>

        <div className="environment-template3">
          <img src={environment3} alt="Environment Template 3" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: environment3 } })}>
            Select
          </button>
        </div>
      </div>

      <div className="environment-template-block2">
        <div className="environment-template4">
          <img src={environment4} alt="Environment Template 4" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: environment4 } })}>
            Select
          </button>
        </div>

        <div className="environment-template5">
          <img src={environment5} alt="Environment Template 5" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: environment5 } })}>
            Select
          </button>
        </div>

        <div className="environment-template6">
          <img src={environment6} alt="Environment Template 6" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: environment6 } })}>
            Select
          </button>
        </div>
      </div>
    </>
  );
};

export default Environment;
