import React from 'react';

import environment1 from '../templates/environment_1.jpg';
import environment2 from '../templates/environment_2.jpg';
import environment3 from '../templates/environment_3.jpg';
import environment4 from '../templates/environment_4.jpg';
import environment5 from '../templates/environment_5.jpg';
import environment6 from '../templates/environment_6.jpg';
import './environment.css';
import Template from './template';

const Environment = () => {
  return (
    <>
      <div className="environment">
        <p>Theme - Environment</p>
      </div>

      <div className="environment-template-block1">
        <Template alt="Environment Template 1" imageSource={environment1} width={521} height={260} />
        <Template alt="Environment Template 2" imageSource={environment2} width={624} height={260} />
        <Template alt="Environment Template 3" imageSource={environment3} width={672} height={420} />
      </div>

      <div className="environment-template-block2">
        <Template alt="Environment Template 4" imageSource={environment4} width={612} height={398} />
        <Template alt="Environment Template 5" imageSource={environment5} width={400} height={267} />
        <Template alt="Environment Template 6" imageSource={environment6} width={356} height={200} />
      </div>
    </>
  );
};

export default Environment;
