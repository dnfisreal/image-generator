import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';

const TextPosition = ({ name, value, setValue, placeHolder }) => {
  return (
    <div className="text-margin">
      <Box m={2}>
        <TextField
          label={name}
          value={value}
          placeholder={placeHolder}
          style={{ width: 170 }}
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
