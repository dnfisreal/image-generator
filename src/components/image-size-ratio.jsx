import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';

// Use this component to set whether to adjust the image size automatically or not.
const ImageSizeRatio = ({ value, setValue }) => {
  return (
    <div className="image-size-ratio">
      <FormControlLabel
        control={<Checkbox checked={value} onChange={(e) => setValue(e.target.checked)} />}
        label="Adjust the size based on the original ratio"
      />
    </div>
  );
};

ImageSizeRatio.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default ImageSizeRatio;
