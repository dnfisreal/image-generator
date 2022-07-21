import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

// Use this component to set the image size.
const ImageSize = ({ name, value, setValue, placeHolder, flag, ratio, sign }) => {
  const handleChange = (e) => {
    // Change the negative input into positive.
    if (e.target.value < 0) {
      e.target.value = -e.target.value;
    }
    // The user is changing the width.
    if (sign === 0) {
      let newValue = value.height;
      if (flag) {
        newValue = Number((e.target.value / ratio).toFixed(3));
      }
      setValue({ width: e.target.value, height: String(newValue) });
    }
    // The user is changing the height.
    else {
      let newValue = value.width;
      if (flag) {
        newValue = Number((e.target.value / ratio).toFixed(3));
      }
      setValue({ width: String(newValue), height: e.target.value });
    }
  };

  return (
    <div className="image-size">
      <Box m={2}>
        <TextField
          label={name}
          value={sign === 0 ? value.width : value.height}
          placeholder={placeHolder}
          style={{ width: 90 }}
          inputProps={{ style: { textAlign: 'center' } }}
          onChange={handleChange}
        />
      </Box>
    </div>
  );
};

ImageSize.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  flag: PropTypes.bool.isRequired,
  ratio: PropTypes.number.isRequired,
  sign: PropTypes.number.isRequired,
};

export default ImageSize;
