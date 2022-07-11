import React, { createRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useScreenshot } from 'use-react-screenshot';

import education1 from '../templates/education_1.jpg';

const Playground = () => {
  const ref = createRef(null);
  const location = useLocation();

  // const [height, setHeight] = useState(400);
  // const [width, setWidth] = useState(400);

  const [image, takeScreenShot] = useScreenshot({
    type: 'image/jpeg',
    quality: 1.0,
  });
  const getImage = () => takeScreenShot(ref.current);

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>Edit your image below</h1>
      <button type="button" onClick={getImage}>
        Preview
      </button>
      <div>
        <img src={image} alt="Preview" />
      </div>
      <div ref={ref} className="preview-template">
        <img src={location.state ? location.state.imgSource : education1} alt="Current template" />
      </div>
    </div>
  );
};

export default Playground;
