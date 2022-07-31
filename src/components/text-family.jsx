import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

// Use this component to display the select field and set the font family of the text.
const TextFamily = ({ labelName, value, setValue }) => {
  // The variable to store all available font styles.
  const allTypes = [
    '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
    '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    '"Courier New", Courier, monospace',
    '"Times New Roman", Times, serif',
    '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
    'Arial, Helvetica, sans-serif', // Default one
    'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
    'Georgia, "Times New Roman", Times, serif',
    'Verdana, Geneva, Tahoma, sans-serif',
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  ];

  return (
    <div>
      <Box m={2}>
        <FormControl fullWidth>
          <InputLabel id="font-style-select-label">{labelName}</InputLabel>
          <Select value={value} label="Font style" onChange={(e) => setValue(e.target.value)}>
            {/* Generate all the font styles based on the array */}
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
