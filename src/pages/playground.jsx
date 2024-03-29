import React, { createRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

import { useScreenshot, createFileName } from '../libs/screenshot';
import Text from '../components/text';
import ImageSize from '../components/image-size';
import ImageSizeRatio from '../components/image-size-ratio';
import TextSize from '../components/text-size';
import TextPosition from '../components/text-position';
import TextContent from '../components/text-content';
import TextFamily from '../components/text-family';
import TextColor from '../components/text-color';
import ImageURL from '../components/image-url';

import './playground.css';

const Playground = () => {
  // The variable for getting the screenshot div
  const ref = createRef(null);
  const location = useLocation();

  // Width and height of the image
  const defaultWidth = location.state ? String(location.state.width) : '840';
  const defaultHeight = location.state ? String(location.state.height) : '560';
  const [imageSize, setImageSize] = useState({
    width: defaultWidth,
    height: defaultHeight,
  });

  // The variable to control whether to adjust the image size automatically or not.
  const [adjustRatio, setAdjustRatio] = useState(true);

  // Text content added to the image
  const [textContent, setTextContent] = useState('');

  // Size of the text
  const [fontSize, setFontSize] = useState('');

  // Two variables indicating the distance from the text to the top and left border of the image respectively
  const [topMargin, setTopMargin] = useState('45');
  const [leftMargin, setLeftMargin] = useState('45');

  // Font family of the text
  const [fontStyle, setFontStyle] = useState('Arial, Helvetica, sans-serif');

  // Color of the text
  const [textColor, setTextColor] = useState('#000000');

  // URL of the final image
  const [imageURL, setImageURL] = useState('');

  // Whether the user has copied the image URL
  const [isCopied, setIsCopied] = useState(false);

  // Whether the image URL is shown
  const [showURL, setShowURL] = useState(false);

  const [, takeScreenShot] = useScreenshot();

  // Download the generated image as a jpg file named "image"
  const download = (img, { name = 'image', extension = 'jpg' } = {}) => {
    const a = document.createElement('a');
    a.href = img;
    a.download = createFileName(extension, name);
    a.click();
  };

  // Take the screenshot to generate the image and then download it to the user's disk
  const downloadScreenshot = () => {
    takeScreenShot(ref.current).then(download);
  };

  // Send the image parameters to the backend and get the image URL
  const sendURL = async () => {
    const baseURL = '/draw';
    const response = await axios.get(baseURL, {
      params: {
        id: location.state ? location.state.imageSource : '/statics/education_1.jpg',
        width: imageSize.width,
        height: imageSize.height,
        text: textContent,
        size: fontSize,
        top: topMargin,
        left: leftMargin,
        style: fontStyle,
        color: textColor,
      },
    });
    /* eslint-disable */
    console.log(response);

    setShowURL(true);
    setImageURL(response.data);
  };

  return (
    <div>
      <div>
        <Link className="links" to="/">
          Go Back
        </Link>
        <h2>Edit your image below</h2>
      </div>

      {/* Region showing the previewed image */}
      <div className="preview-region">
        <div className="screenshot">
          <img
            width={Number(defaultWidth)}
            height={Number(defaultHeight)}
            src={location.state ? location.state.imageSource : '/statics/education_1.jpg'}
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

      {/* Region for taking the screenshot */}
      <div className="real-screenshot-region">
        <div
          ref={ref}
          className="ref-screenshot"
          width={Math.floor(Number(imageSize.width))}
          height={Math.floor(Number(imageSize.height))}>
          <img
            width={Math.floor(Number(imageSize.width))}
            height={Math.floor(Number(imageSize.height))}
            src={location.state ? location.state.imageSource : '/statics/education_1.jpg'}
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
        {/* Region for adjusting the size of the image */}
        <div className="image-size-region">
          <p>Set the image size:</p>
          <div className="set-image-size">
            <ImageSize
              name="Width"
              value={imageSize}
              setValue={setImageSize}
              placeHolder={defaultWidth}
              flag={adjustRatio}
              ratio={defaultWidth / defaultHeight}
              sign={0}
            />
            <ImageSize
              name="Height"
              value={imageSize}
              setValue={setImageSize}
              placeHolder={defaultHeight}
              flag={adjustRatio}
              ratio={defaultHeight / defaultWidth}
              sign={1}
            />
          </div>
          <ImageSizeRatio value={adjustRatio} setValue={setAdjustRatio} />
        </div>

        {/* Region for adding text to the image */}
        <div className="text-region">
          <p>Add text to the image:</p>
          <TextContent value={textContent} setValue={setTextContent} />
        </div>

        {/* Region for adjusting the size and the position of the text */}
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
            <TextSize name="Size" value={fontSize} setValue={setFontSize} placeHolder="30" width={60} />
            <TextPosition name="Top margin:" value={topMargin} setValue={setTopMargin} placeHolder="45" />
            <TextPosition name="Left margin:" value={leftMargin} setValue={setLeftMargin} placeHolder="45" />
          </div>
        </div>
      </div>

      <div className="parameter-region2">
        {/* Region for adjusting the font family of the text */}
        <div className="font-style-region">
          <p>Set the font style of the text:</p>
          <TextFamily labelName="Font style" value={fontStyle} setValue={setFontStyle} />
        </div>

        {/* Region for adjusting the color of the text */}
        <div className="text-color-region">
          <p>Set the color of the text:</p>
          <TextColor value={textColor} setValue={setTextColor} />
        </div>
      </div>

      {/* Two buttons to download the image and get the image URL */}
      <div className="two-buttons">
        <button type="button" onClick={downloadScreenshot}>
          Download
        </button>
        <button type="button" onClick={sendURL}>
          Share
        </button>
      </div>

      {/* Display the image URL */}
      {showURL && <ImageURL urlValue={imageURL} copyValue={isCopied} setCopyValue={setIsCopied} />}
    </div>
  );
};

export default Playground;
