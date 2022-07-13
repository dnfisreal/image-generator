import React from 'react';
import PropTypes from 'prop-types';

import './text-position.css';

const TextPosition = ({ name, value, setValue }) => {
  return (
    <div className="text-margin">
      <label className="text-margin-label" htmlFor="text-margin">
        {name}
        <input
          className="text-margin-input"
          value={value}
          placeholder="50"
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </div>
  );
};

TextPosition.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TextPosition;
