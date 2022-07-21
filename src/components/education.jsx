import React from 'react';

import education1 from '../templates/education_1.jpg';
import education2 from '../templates/education_2.jpg';
import education3 from '../templates/education_3.jpg';
import education4 from '../templates/education_4.jpg';
import education5 from '../templates/education_5.jpg';
import education6 from '../templates/education_6.jpg';
import './education.css';
import Template from './template';

const Education = () => {
  return (
    <>
      <div className="education">
        <p>Theme - Education</p>
      </div>

      {/* Display all six templates */}
      <div className="education-template-block1">
        <Template alt="Education Template 1" imageSource={education1} width={840} height={560} />
        <Template alt="Education Template 2" imageSource={education2} width={856} height={571} />
        <Template alt="Education Template 3" imageSource={education3} width={815} height={543} />
      </div>

      <div className="education-template-block2">
        <Template alt="Education Template 4" imageSource={education4} width={853} height={569} />
        <Template alt="Education Template 5" imageSource={education5} width={832} height={468} />
        <Template alt="Education Template 6" imageSource={education6} width={867} height={578} />
      </div>
    </>
  );
};

export default Education;
