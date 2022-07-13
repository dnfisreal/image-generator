import React from 'react';
import PropTypes from 'prop-types';

import './text-content.css';

const TextContent = ({ name, value, setValue }) => {
  return (
    <div className="text-content">
      <label className="text-content-label" htmlFor="text-content">
        {name}
        <textarea
          className="text-content-input"
          value={value}
          placeholder="Type you text here"
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </div>
  );
};

TextContent.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TextContent;
