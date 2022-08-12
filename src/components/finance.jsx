import React from 'react';

import './finance.css';
import Template from './template';

const Finance = () => {
  const defaultPath = '/statics/finance_';
  return (
    <>
      <div className="finance">
        <p>Theme - Finance</p>
      </div>

      {/* Display all six templates */}
      <div className="finance-template-block1">
        <Template alt="Finance Template 1" imageSource={`${defaultPath}1.jpg`} width={878} height={404} />
        <Template alt="Finance Template 2" imageSource={`${defaultPath}2.jpg`} width={825} height={550} />
        <Template alt="Finance Template 3" imageSource={`${defaultPath}3.jpg`} width={840} height={560} />
      </div>

      <div className="finance-template-block2">
        <Template alt="Finance Template 4" imageSource={`${defaultPath}4.jpg`} width={857} height={504} />
        <Template alt="Finance Template 5" imageSource={`${defaultPath}5.jpg`} width={840} height={630} />
        <Template alt="Finance Template 6" imageSource={`${defaultPath}6.jpg`} width={856} height={476} />
      </div>
    </>
  );
};

export default Finance;
