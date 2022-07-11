import React from 'react';

import entertainment1 from '../templates/entertainment_1.jpg';
import entertainment2 from '../templates/entertainment_2.jpg';
import entertainment3 from '../templates/entertainment_3.jpg';
import entertainment4 from '../templates/entertainment_4.jpg';
import entertainment5 from '../templates/entertainment_5.jpg';
import entertainment6 from '../templates/entertainment_6.jpg';
import './entertainment.css';
import Template from './template';

const Entertainment = () => {
  return (
    <>
      <div className="entertainment">
        <p>Theme - Entertainment</p>
      </div>

      <div className="entertainment-template-block1">
        <Template alt="Entertainment Template 1" imageSource={entertainment1} width={513} height={340} />
        <Template alt="Entertainment Template 2" imageSource={entertainment2} width={612} height={357} />
        <Template alt="Entertainment Template 3" imageSource={entertainment3} width={600} height={400} />
      </div>

      <div className="entertainment-template-block2">
        <Template alt="Entertainment Template 4" imageSource={entertainment4} width={758} height={506} />
        <Template alt="Entertainment Template 5" imageSource={entertainment5} width={500} height={375} />
        <Template alt="Entertainment Template 6" imageSource={entertainment6} width={692} height={462} />
      </div>
    </>
  );
};

export default Entertainment;
