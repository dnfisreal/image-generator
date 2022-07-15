import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';

// Use this component to set the position of the text, including the top and the left margin.
const TextPosition = ({ name, value, setValue, placeHolder }) => {
  return (
    <div className="text-margin">
      <Box m={2}>
        <TextField
          label={name}
          value={value}
          placeholder={placeHolder}
          style={{ width: 170 }}
          // Since the variable passed into the text style is in percentage form,
          // add a "%" suffix after the text field.
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
            inputProps: { style: { textAlign: 'center' } },
          }}
          onChange={(e) => setValue(e.target.value)}
          variant="standard"
        />
      </Box>
    </div>
  );
};

TextPosition.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
};

export default TextPosition;
