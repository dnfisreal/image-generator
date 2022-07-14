import React from 'react';
import { SliderPicker } from 'react-color';
import PropTypes from 'prop-types';

const TextColor = ({ value, setValue }) => {
  return (
    <div className="text-color">
      <SliderPicker color={value} onChangeComplete={(color) => setValue(color.hex)} />
    </div>
  );
};

TextColor.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TextColor;
