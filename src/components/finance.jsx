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

      {/* Display all six templates */}
      <div className="finance-template-block1">
        <Template alt="Finance Template 1" imageSource={finance1} width={878} height={404} />
        <Template alt="Finance Template 2" imageSource={finance2} width={825} height={550} />
        <Template alt="Finance Template 3" imageSource={finance3} width={840} height={560} />
      </div>

      <div className="finance-template-block2">
        <Template alt="Finance Template 4" imageSource={finance4} width={857} height={504} />
        <Template alt="Finance Template 5" imageSource={finance5} width={840} height={630} />
        <Template alt="Finance Template 6" imageSource={finance6} width={856} height={476} />
      </div>
    </>
  );
};

export default Finance;
