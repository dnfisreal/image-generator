import React from 'react';
import PropTypes from 'prop-types';

import './text.css';

// Use this component to display the text added to the image.
const Text = ({ fontSize, topMargin, leftMargin, fontStyle, textColor, textContent }) => {
  return (
    <pre
      className="text-on-image"
      style={{
        fontSize: Number(fontSize),
        top: `${topMargin}%`,
        left: `${leftMargin}%`,
        fontFamily: fontStyle,
        color: textColor,
      }}>
      {textContent}
    </pre>
  );
};

Text.propTypes = {
  fontSize: PropTypes.string.isRequired,
  topMargin: PropTypes.string.isRequired,
  leftMargin: PropTypes.string.isRequired,
  fontStyle: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
};

export default Text;
