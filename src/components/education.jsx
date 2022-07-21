import React from 'react';

import './education.css';
import Template from './template';

const Education = () => {
  const defaultPath = '/statics/templates/education_';

  return (
    <>
      <div className="education">
        <p>Theme - Education</p>
      </div>

      {/* Display all six templates */}
      <div className="education-template-block1">
        <Template alt="Education Template 1" imageSource={`${defaultPath}1.jpg`} width={840} height={560} />
        <Template alt="Education Template 2" imageSource={`${defaultPath}2.jpg`} width={856} height={571} />
        <Template alt="Education Template 3" imageSource={`${defaultPath}3.jpg`} width={815} height={543} />
      </div>

      <div className="education-template-block2">
        <Template alt="Education Template 4" imageSource={`${defaultPath}4.jpg`} width={853} height={569} />
        <Template alt="Education Template 5" imageSource={`${defaultPath}5.jpg`} width={832} height={468} />
        <Template alt="Education Template 6" imageSource={`${defaultPath}6.jpg`} width={867} height={578} />
      </div>
    </>
  );
};

export default Education;
