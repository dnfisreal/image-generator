import React from 'react';

import technology1 from '../templates/technology_1.jpg';
import technology2 from '../templates/technology_2.jpg';
import technology3 from '../templates/technology_3.jpg';
import technology4 from '../templates/technology_4.jpg';
import technology5 from '../templates/technology_5.jpg';
import technology6 from '../templates/technology_6.jpg';
import './technology.css';
import Template from './template';

const Technology = () => {
  return (
    <>
      <div className="technology">
        <p>Theme - Technology</p>
      </div>

      {/* Display all six templates */}
      <div className="technology-template-block1">
        <Template alt="Technology Template 1" imageSource={technology1} width={814} height={542} />
        <Template alt="Technology Template 2" imageSource={technology2} width={832} height={624} />
        <Template alt="Technology Template 3" imageSource={technology3} width={867} height={600} />
      </div>

      <div className="technology-template-block2">
        <Template alt="Technology Template 4" imageSource={technology4} width={845} height={528} />
        <Template alt="Technology Template 5" imageSource={technology5} width={832} height={555} />
        <Template alt="Technology Template 6" imageSource={technology6} width={860} height={652} />
      </div>
    </>
  );
};

export default Technology;
