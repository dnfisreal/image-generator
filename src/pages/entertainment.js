import React from 'react';
import { useNavigate } from 'react-router-dom';

import entertainment1 from '../templates/entertainment_1.jpg';
import entertainment2 from '../templates/entertainment_2.jpg';
import entertainment3 from '../templates/entertainment_3.jpg';
import entertainment4 from '../templates/entertainment_4.jpg';
import entertainment5 from '../templates/entertainment_5.jpg';
import entertainment6 from '../templates/entertainment_6.jpg';
import './entertainment.css';

const Entertainment = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="entertainment">
        <p>Theme - Entertainment</p>
      </div>

      <div className="entertainment-template-block1">
        <div className="entertainment-template1">
          <img src={entertainment1} alt="Entertainment Template 1" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: entertainment1 } })}>
            Select
          </button>
        </div>

        <div className="entertainment-template2">
          <img src={entertainment2} alt="Entertainment Template 2" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: entertainment2 } })}>
            Select
          </button>
        </div>

        <div className="entertainment-template3">
          <img src={entertainment3} alt="Entertainment Template 3" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: entertainment3 } })}>
            Select
          </button>
        </div>
      </div>

      <div className="entertainment-template-block2">
        <div className="entertainment-template4">
          <img src={entertainment4} alt="Entertainment Template 4" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: entertainment4 } })}>
            Select
          </button>
        </div>

        <div className="entertainment-template5">
          <img src={entertainment5} alt="Entertainment Template 5" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: entertainment5 } })}>
            Select
          </button>
        </div>

        <div className="entertainment-template6">
          <img src={entertainment6} alt="Entertainment Template 6" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: entertainment6 } })}>
            Select
          </button>
        </div>
      </div>
    </>
  );
};

export default Entertainment;
