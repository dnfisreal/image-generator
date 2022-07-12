import React, { createRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useScreenshot, createFileName } from '../libs/screenshot';

import education1 from '../templates/education_1.jpg';
import './playground.css';

const Playground = () => {
  const ref = createRef(null);
  const location = useLocation();

  const [height, setHeight] = useState(location.state ? location.state.height : 400);
  const [width, setWidth] = useState(location.state ? location.state.width : 600);

  const [textContent, setTextContent] = useState('Test');
  const [fontSize, setFontSize] = useState(30);

  const [, takeScreenShot] = useScreenshot();

  const download = (img, { name = 'image', extension = 'jpg' } = {}) => {
    const a = document.createElement('a');
    a.href = img;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => {
    takeScreenShot(ref.current).then(download);
  };

  return (
    <div>
      <div>
        <Link className="links" to="/">
          Go Back
        </Link>
        <h2>Edit your image below</h2>
      </div>

      <div className="preview-region">
        <div ref={ref} className="screenshot" width={width} height={height}>
          <img
            width={width}
            height={height}
            src={location.state ? location.state.imageSource : education1}
            alt="Current template"
          />
          <p style={{ fontSize: Number(fontSize) }}>{textContent}</p>
        </div>
      </div>

      <div className="parameter-region">
        <div className="set-width">
          <label className="image-width-label" htmlFor="image-width">
            Width of the image:
            <input
              value={width}
              placeholder={location.state ? location.state.width : '600'}
              onChange={(e) => setWidth(e.target.value)}
            />
          </label>
        </div>

        <div className="set-height">
          <label className="image-height-label" htmlFor="image-height">
            Height of the image:
            <input
              value={height}
              placeholder={location.state ? location.state.height : '400'}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>

        <div className="text-content">
          <label className="text-content-label" htmlFor="text-content">
            Text content:
            <input
              className="text-content-input"
              value={textContent}
              placeholder="Test"
              onChange={(e) => setTextContent(e.target.value)}
            />
          </label>
        </div>

        <div className="font-size">
          <label className="font-size-label" htmlFor="font-size">
            Text size:
            <input
              className="font-size-input"
              value={fontSize}
              placeholder="30"
              onChange={(e) => setFontSize(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="two-buttons">
        <button type="button" onClick={downloadScreenshot}>
          Download
        </button>
      </div>
    </div>
  );
};

export default Playground;
