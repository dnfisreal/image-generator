import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import education1 from '../templates/education_1.jpg';

const Playground = () => {
  const location = useLocation();

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>Playground Page</h1>
      <img src={location.state ? location.state.imgSource : education1} alt="Current template" />
    </div>
  );
};

export default Playground;
