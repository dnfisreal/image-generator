import React, { createRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { useScreenshot, createFileName } from '../libs/screenshot';
import education1 from '../templates/education_1.jpg';
import SetSize from '../components/set-size';
import TextPosition from '../components/text-position';
import TextContent from '../components/text-content';
import './playground.css';

const Playground = () => {
  const ref = createRef(null);
  const location = useLocation();

  const [height, setHeight] = useState(location.state ? location.state.height : 400);
  const [width, setWidth] = useState(location.state ? location.state.width : 600);

  const [textContent, setTextContent] = useState('Type your text here');

  const [fontSize, setFontSize] = useState(30);
  const [topMargin, setTopMargin] = useState('50');
  const [leftMargin, setLeftMargin] = useState('50');

  const allTypes = [
    '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
    '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    '"Courier New", Courier, monospace',
    '"Times New Roman", Times, serif',
    '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
    'Arial, Helvetica, sans-serif',
    'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
    'Georgia, "Times New Roman", Times, serif',
    'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
    'Verdana, Geneva, Tahoma, sans-serif',
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  ];
  const [fontStyle, setFontStyle] = useState(allTypes[0]);

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
          <pre
            style={{
              fontSize: Number(fontSize),
              top: `${topMargin}%`,
              left: `${leftMargin}%`,
              fontFamily: fontStyle,
            }}>
            {textContent}
          </pre>
        </div>
      </div>

      <div className="parameter-region">
        <div className="image-size-region">
          <p>Set the image size:</p>
          <SetSize
            name="Width of the image:"
            value={width}
            setValue={setWidth}
            placeHolder={location.state ? String(location.state.width) : '600'}
            width={60}
          />
          <SetSize
            name="Height of the image:"
            value={height}
            setValue={setHeight}
            placeHolder={location.state ? String(location.state.height) : '400'}
            width={60}
          />
        </div>

        <div className="text-region">
          <p>Add text to the image:</p>
          <TextContent name="Text content:" value={textContent} setValue={setTextContent} />
        </div>

        <div className="text-parameters">
          <p>Set the size and the position of the text:</p>
          <SetSize name="Text size:" value={fontSize} setValue={setFontSize} placeHolder="30" width={40} />

          <TextPosition name="Top margin (Negative value is accecptable):" value={topMargin} setValue={setTopMargin} />
          <TextPosition
            name="Left margin (Negative value is accecptable):"
            value={leftMargin}
            setValue={setLeftMargin}
          />
        </div>
      </div>

      <div className="parameter-region2">
        <div className="font-style-region">
          <p>Set the font style of the text:</p>
          <DropdownButton
            className="dropdown-menu"
            title={fontStyle}
            id="font-type-dropdown-menu"
            onSelect={(e) => setFontStyle(e)}>
            {allTypes.map((fontType) => (
              <Dropdown.Item eventKey={fontType}>{fontType}</Dropdown.Item>
            ))}
          </DropdownButton>
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
