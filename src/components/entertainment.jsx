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

      {/* Display all six templates */}
      <div className="entertainment-template-block1">
        <Template alt="Entertainment Template 1" imageSource={entertainment1} width={821} height={480} />
        <Template alt="Entertainment Template 2" imageSource={entertainment2} width={856} height={500} />
        <Template alt="Entertainment Template 3" imageSource={entertainment3} width={840} height={560} />
      </div>

      <div className="entertainment-template-block2">
        <Template alt="Entertainment Template 4" imageSource={entertainment4} width={834} height={556} />
        <Template alt="Entertainment Template 5" imageSource={entertainment5} width={850} height={637} />
        <Template alt="Entertainment Template 6" imageSource={entertainment6} width={830} height={554} />
      </div>
    </>
  );
};

export default Entertainment;
