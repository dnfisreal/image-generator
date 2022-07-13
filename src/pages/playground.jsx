import React, { createRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useScreenshot, createFileName } from '../libs/screenshot';

import education1 from '../templates/education_1.jpg';
import ImageSize from '../components/image-size';
import TextPosition from '../components/text-position';
import './playground.css';

const Playground = () => {
  const ref = createRef(null);
  const location = useLocation();

  const [height, setHeight] = useState(location.state ? location.state.height : 400);
  const [width, setWidth] = useState(location.state ? location.state.width : 600);

  const [textContent, setTextContent] = useState('Test');
  const [fontSize, setFontSize] = useState(30);
  const [topMargin, setTopMargin] = useState('50');
  const [leftMargin, setLeftMargin] = useState('50');

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
          <pre style={{ fontSize: Number(fontSize), top: `${topMargin}%`, left: `${leftMargin}%` }}>{textContent}</pre>
        </div>
      </div>

      <div className="parameter-region">
        <div className="image-size-region">
          <p>Set the image size:</p>
          <ImageSize
            name="Width of the image:"
            value={width}
            setValue={setWidth}
            placeHolder={location.state ? String(location.state.width) : '600'}
          />
          <ImageSize
            name="Height of the image:"
            value={height}
            setValue={setHeight}
            placeHolder={location.state ? String(location.state.height) : '400'}
          />
        </div>

        <div className="text-region">
          <p>Add text to the image:</p>
          <div className="text-content">
            <label className="text-content-label" htmlFor="text-content">
              Text content:
              <textarea
                className="text-content-input"
                value={textContent}
                placeholder="Test"
                onChange={(e) => setTextContent(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="text-parameters">
          <p>Set the size and the position of the text:</p>
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

          <TextPosition name="Top margin (Negative value is accecptable):" value={topMargin} setValue={setTopMargin} />
          <TextPosition
            name="Left margin (Negative value is accecptable):"
            value={leftMargin}
            setValue={setLeftMargin}
          />
        </div>
      </div>

      <div className="parameter-region2">
        <p>Set the font style and the color of the text:</p>
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
