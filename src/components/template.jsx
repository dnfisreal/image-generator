import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './template.css';

const Template = ({ alt, imageSource, width, height }) => {
  // Help to navigate to the playground page after selecting a template
  const navigate = useNavigate();

  return (
    // Display one template
    <div className="one-template">
      <img src={imageSource} alt={alt} />
      <button type="button" onClick={() => navigate('/playground', { state: { imageSource, width, height } })}>
        Select
      </button>
    </div>
  );
};

Template.propTypes = {
  alt: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Template;
