import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

// Use this component to display the multiline text field and set the text content added to the image.
const TextContent = ({ value, setValue }) => {
  return (
    <div className="text-content">
      <TextField
        multiline
        minRows={3}
        value={value}
        placeholder="Type you text here"
        style={{ width: 350 }}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

TextContent.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TextContent;
