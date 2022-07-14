import React, { createRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { useScreenshot, createFileName } from '../libs/screenshot';
import education1 from '../templates/education_1.jpg';

import Text from '../components/text';
import SetSize from '../components/set-size';
import TextPosition from '../components/text-position';
import TextContent from '../components/text-content';
import TextFamily from '../components/text-family';
import TextColor from '../components/text-color';

import './playground.css';

const Playground = () => {
  const ref = createRef(null);
  const location = useLocation();

  const [height, setHeight] = useState(location.state ? String(location.state.height) : '400');
  const [width, setWidth] = useState(location.state ? String(location.state.width) : '600');

  const [textContent, setTextContent] = useState('');

  const [fontSize, setFontSize] = useState('');
  const [topMargin, setTopMargin] = useState('45');
  const [leftMargin, setLeftMargin] = useState('50');

  const [fontStyle, setFontStyle] = useState('Arial, Helvetica, sans-serif');
  const [textColor, setTextColor] = useState('#000000');

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
        <div ref={ref} className="screenshot" width={Number(width)} height={Number(height)}>
          <img
            width={Number(width)}
            height={Number(height)}
            src={location.state ? location.state.imageSource : education1}
            alt="Current template"
          />
          <Text
            fontSize={fontSize}
            topMargin={topMargin}
            leftMargin={leftMargin}
            fontStyle={fontStyle}
            textColor={textColor}
            textContent={textContent}
          />
        </div>
      </div>

      <div className="parameter-region">
        <div className="image-size-region">
          <p>Set the image size:</p>
          <div className="set-image-size">
            <SetSize
              name="Width"
              value={width}
              setValue={setWidth}
              placeHolder={location.state ? String(location.state.width) : '600'}
              width={80}
            />
            <SetSize
              name="Height"
              value={height}
              setValue={setHeight}
              placeHolder={location.state ? String(location.state.height) : '400'}
              width={80}
            />
          </div>
        </div>

        <div className="text-region">
          <p>Add text to the image:</p>
          <TextContent value={textContent} setValue={setTextContent} />
        </div>

        <div className="text-parameters">
          <p
            style={{
              fontSize: 20,
              color: 'teal',
              fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
              whiteSpace: 'pre',
            }}>
            Set the size and the position of the text:
          </p>
          <div className="text-size-and-position">
            <SetSize name="Size" value={fontSize} setValue={setFontSize} placeHolder="30" width={60} />
            <TextPosition
              name="Top margin (can be negative):"
              value={topMargin}
              setValue={setTopMargin}
              placeHolder="45"
            />
            <TextPosition
              name="Left margin (can be negative):"
              value={leftMargin}
              setValue={setLeftMargin}
              placeHolder="50"
            />
          </div>
        </div>
      </div>

      <div className="parameter-region2">
        <div className="font-style-region">
          <p>Set the font style of the text:</p>
          <TextFamily labelName="Font style" value={fontStyle} setValue={setFontStyle} />
        </div>

        <div className="text-color-region">
          <p>Set the color of the text:</p>
          <TextColor value={textColor} setValue={setTextColor} />
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
