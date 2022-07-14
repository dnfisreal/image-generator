import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

const TextFamily = ({ labelName, value, setValue }) => {
  const allTypes = [
    '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
    '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    '"Courier New", Courier, monospace',
    '"Times New Roman", Times, serif',
    '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
    'Arial, Helvetica, sans-serif',
    'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
    'Georgia, "Times New Roman", Times, serif',
    'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
    'Verdana, Geneva, Tahoma, sans-serif',
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  ];

  return (
    <div>
      <Box m={2}>
        <FormControl fullWidth>
          <InputLabel id="font-style-select-label">{labelName}</InputLabel>
          <Select value={value} label="Font style" onChange={(e) => setValue(e.target.value)}>
            {allTypes.map((fontType) => (
              <MenuItem value={fontType}>{fontType}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

TextFamily.propTypes = {
  labelName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TextFamily;
