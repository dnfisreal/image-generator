import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Use this component to display the image URL and the icon to copy the URL.
const ImageURL = ({ urlValue, copyValue, setCopyValue }) => {
  const onCopyText = () => {
    setCopyValue(true);

    // Change the text back to the icon
    setTimeout(() => {
      setCopyValue(false);
    }, 1000);
  };

  return (
    <div className="image-share-url">
      <TextField value={urlValue} style={{ width: 600 }} multiline />
      <CopyToClipboard text={urlValue} onCopy={onCopyText}>
        <span>{copyValue ? 'Copied!' : <ContentCopyIcon style={{ cursor: 'pointer' }} />}</span>
      </CopyToClipboard>
    </div>
  );
};

ImageURL.propTypes = {
  urlValue: PropTypes.string.isRequired,
  copyValue: PropTypes.bool.isRequired,
  setCopyValue: PropTypes.func.isRequired,
};

export default ImageURL;
