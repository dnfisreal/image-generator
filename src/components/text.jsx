import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ fontSize, topMargin, leftMargin, fontStyle, textColor, textContent }) => {
  return (
    <pre
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
