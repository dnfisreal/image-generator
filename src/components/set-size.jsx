import React from 'react';
import PropTypes from 'prop-types';

import './set-size.css';

const SetSize = ({ name, value, setValue, placeHolder, width }) => {
  return (
    <div className="set-size">
      <label className="set-size-label" htmlFor="set-size">
        {name}
        <input
          className="set-size-input"
          value={value}
          placeholder={placeHolder}
          style={{ width }}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

SetSize.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default SetSize;
