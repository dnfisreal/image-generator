import React from 'react';
import PropTypes from 'prop-types';

import './image-size.css';

const ImageSize = ({ name, value, setValue, placeHolder }) => {
  return (
    <div className="set-size">
      <label className="image-size-label" htmlFor="image-size">
        {name}
        <input
          className="image-size-input"
          value={value}
          placeholder={placeHolder}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

ImageSize.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
};

export default ImageSize;
