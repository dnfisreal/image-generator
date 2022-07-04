import React from 'react';
import { useNavigate } from 'react-router-dom';

import finance1 from '../templates/finance_1.jpg';
import finance2 from '../templates/finance_2.jpg';
import finance3 from '../templates/finance_3.jpg';
import finance4 from '../templates/finance_4.jpg';
import finance5 from '../templates/finance_5.jpg';
import finance6 from '../templates/finance_6.jpg';
import './finance.css';

const Finance = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="finance">
        <p>Theme - Finance</p>
      </div>

      <div className="finance-template-block1">
        <div className="finance-template1">
          <img src={finance1} alt="Finance Template 1" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: finance1 } })}>
            Select
          </button>
        </div>

        <div className="finance-template2">
          <img src={finance2} alt="Finance Template 2" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: finance2 } })}>
            Select
          </button>
        </div>

        <div className="finance-template3">
          <img src={finance3} alt="Finance Template 3" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: finance3 } })}>
            Select
          </button>
        </div>
      </div>

      <div className="finance-template-block2">
        <div className="finance-template4">
          <img src={finance4} alt="Finance Template 4" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: finance4 } })}>
            Select
          </button>
        </div>

        <div className="finance-template5">
          <img src={finance5} alt="Finance Template 5" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: finance5 } })}>
            Select
          </button>
        </div>

        <div className="finance-template6">
          <img src={finance6} alt="Finance Template 6" />
          <button type="button" onClick={() => navigate('/playground', { state: { imgSource: finance6 } })}>
            Select
          </button>
        </div>
      </div>
    </>
  );
};

export default Finance;
