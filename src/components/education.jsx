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

      <div className="education-template-block1">
        <Template alt="Education Template 1" imageSource={education1} width={600} height={400} />
        <Template alt="Education Template 2" imageSource={education2} width={612} height={408} />
        <Template alt="Education Template 3" imageSource={education3} width={509} height={339} />
      </div>

      <div className="education-template-block2">
        <Template alt="Education Template 4" imageSource={education4} width={711} height={474} />
        <Template alt="Education Template 5" imageSource={education5} width={462} height={260} />
        <Template alt="Education Template 6" imageSource={education6} width={667} height={445} />
      </div>
    </>
  );
};

export default Education;
