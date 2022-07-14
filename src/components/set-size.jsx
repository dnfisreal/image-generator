import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const SetSize = ({ name, value, setValue, placeHolder, width }) => {
  return (
    <div className="set-size">
      <Box m={2}>
        <TextField
          label={name}
          value={value}
          placeholder={placeHolder}
          style={{ width }}
          inputProps={{ style: { textAlign: 'center' } }}
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
    </div>
  );
};

SetSize.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default SetSize;
