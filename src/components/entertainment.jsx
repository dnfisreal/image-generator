import React from 'react';

import './entertainment.css';
import Template from './template';

const Entertainment = () => {
  const defaultPath = '/statics/templates/entertainment_';

  return (
    <>
      <div className="entertainment">
        <p>Theme - Entertainment</p>
      </div>

      {/* Display all six templates */}
      <div className="entertainment-template-block1">
        <Template alt="Entertainment Template 1" imageSource={`${defaultPath}1.jpg`} width={821} height={480} />
        <Template alt="Entertainment Template 2" imageSource={`${defaultPath}2.jpg`} width={856} height={500} />
        <Template alt="Entertainment Template 3" imageSource={`${defaultPath}3.jpg`} width={840} height={560} />
      </div>

      <div className="entertainment-template-block2">
        <Template alt="Entertainment Template 4" imageSource={`${defaultPath}4.jpg`} width={834} height={556} />
        <Template alt="Entertainment Template 5" imageSource={`${defaultPath}5.jpg`} width={850} height={637} />
        <Template alt="Entertainment Template 6" imageSource={`${defaultPath}6.jpg`} width={830} height={554} />
      </div>
    </>
  );
};

export default Entertainment;
