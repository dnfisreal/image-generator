import React from 'react';

import finance1 from '../templates/finance_1.jpg';
import finance2 from '../templates/finance_2.jpg';
import finance3 from '../templates/finance_3.jpg';
import finance4 from '../templates/finance_4.jpg';
import finance5 from '../templates/finance_5.jpg';
import finance6 from '../templates/finance_6.jpg';
import './finance.css';
import Template from './template';

const Finance = () => {
  return (
    <>
      <div className="finance">
        <p>Theme - Finance</p>
      </div>

      <div className="finance-template-block1">
        <Template alt="Finance Template 1" imageSource={finance1} />
        <Template alt="Finance Template 2" imageSource={finance2} />
        <Template alt="Finance Template 3" imageSource={finance3} />
      </div>

      <div className="finance-template-block2">
        <Template alt="Finance Template 4" imageSource={finance4} />
        <Template alt="Finance Template 5" imageSource={finance5} />
        <Template alt="Finance Template 6" imageSource={finance6} />
      </div>
    </>
  );
};

export default Finance;
