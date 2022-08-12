import React from 'react';

import './environment.css';
import Template from './template';

const Environment = () => {
  const defaultPath = '/statics/environment_';

  return (
    <>
      <div className="environment">
        <p>Theme - Environment</p>
      </div>

      {/* Display all six templates */}
      <div className="environment-template-block1">
        <Template alt="Environment Template 1" imageSource={`${defaultPath}1.jpg`} width={834} height={416} />
        <Template alt="Environment Template 2" imageSource={`${defaultPath}2.jpg`} width={811} height={338} />
        <Template alt="Environment Template 3" imageSource={`${defaultPath}3.jpg`} width={873} height={546} />
      </div>

      <div className="environment-template-block2">
        <Template alt="Environment Template 4" imageSource={`${defaultPath}4.jpg`} width={857} height={557} />
        <Template alt="Environment Template 5" imageSource={`${defaultPath}5.jpg`} width={840} height={561} />
        <Template alt="Environment Template 6" imageSource={`${defaultPath}6.jpg`} width={854} height={480} />
      </div>
    </>
  );
};

export default Environment;
