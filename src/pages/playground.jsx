import React, { createRef, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useScreenshot, createFileName } from 'use-react-screenshot';

import education1 from '../templates/education_1.jpg';
import './playground.css';

const Playground = () => {
  const ref = createRef(null);
  const location = useLocation();

  const [height, setHeight] = useState(location.state.height);
  const [width, setWidth] = useState(location.state.width);
  const [flag, setFlag] = useState(0);

  const [textContent, setTextContent] = useState('Test');
  const [fontSize, setFontSize] = useState(30);

  useEffect(() => {
    if (flag !== 0) {
      downloadScreenshot();
    }
  }, [flag]);

  const [, takeScreenShot] = useScreenshot();

  const download = (img, { name = 'image', extension = 'jpg' } = {}) => {
    const a = document.createElement('a');
    a.href = img;
    a.download = createFileName(extension, name);
    a.click();
  };

  const adjustSize = () => {
    setHeight(location.state.height / 2);
    setWidth(location.state.width / 2);
    setFontSize(fontSize / 2);
    setFlag(flag + 1);
  };

  const downloadScreenshot = () => {
    takeScreenShot(ref.current).then(download);
    setHeight(location.state.height);
    setWidth(location.state.width);
    setFontSize(fontSize * 2);
  };

  return (
    <div>
      <div>
        <Link className="links" to="/">
          Go Back
        </Link>
        <h2>Edit your image below</h2>
      </div>

      <div className="all-regions">
        <div className="blank" />
        <div ref={ref} className="screenshot" style={{ width, height }}>
          <img
            style={{ width, height }}
            src={location.state ? location.state.imageSource : education1}
            alt="Current template"
          />
          <p style={{ fontSize: Number(fontSize) }}>{textContent}</p>

          <div className="two-buttons">
            <button type="button" onClick={adjustSize}>
              Download
            </button>
          </div>
        </div>

        <div className="all-parameters">
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
      </div>
    </div>
  );
};

export default Playground;
