import React from 'react';

import './technology.css';
import Template from './template';

const Technology = () => {
  const defaultPath = '/statics/templates/technology_';

  return (
    <>
      <div className="technology">
        <p>Theme - Technology</p>
      </div>

      {/* Display all six templates */}
      <div className="technology-template-block1">
        <Template alt="Technology Template 1" imageSource={`${defaultPath}1.jpg`} width={814} height={542} />
        <Template alt="Technology Template 2" imageSource={`${defaultPath}2.jpg`} width={832} height={624} />
        <Template alt="Technology Template 3" imageSource={`${defaultPath}3.jpg`} width={867} height={600} />
      </div>

      <div className="technology-template-block2">
        <Template alt="Technology Template 4" imageSource={`${defaultPath}4.jpg`} width={845} height={528} />
        <Template alt="Technology Template 5" imageSource={`${defaultPath}5.jpg`} width={832} height={555} />
        <Template alt="Technology Template 6" imageSource={`${defaultPath}6.jpg`} width={860} height={652} />
      </div>
    </>
  );
};

export default Technology;
