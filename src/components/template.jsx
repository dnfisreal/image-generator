import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './template.css';

const Template = ({ alt, imageSource }) => {
  const navigate = useNavigate();

  return (
    <div className="one-template">
      <img src={imageSource} alt={alt} />
      <button type="button" onClick={() => navigate('/playground', { state: { imgSource: imageSource } })}>
        Select
      </button>
    </div>
  );
};

Template.propTypes = {
  alt: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default Template;
