import React, { useState } from 'react';

import Education from '../components/education';
import Technology from '../components/technology';
import Entertainment from '../components/entertainment';
import Finance from '../components/finance';
import Environment from '../components/environment';
import './home.css';

const Home = () => {
  // A variable indicating which topic is chosen currently
  const [selectedType, setSelectedType] = useState('education');

  const educationClick = () => {
    setSelectedType('education');
  };

  const technologyClick = () => {
    setSelectedType('technology');
  };

  const entertainmentClick = () => {
    setSelectedType('entertainment');
  };

  const financeClick = () => {
    setSelectedType('finance');
  };

  const environmentClick = () => {
    setSelectedType('environment');
  };

  return (
    <>
      <div className="instruction">
        <p>
          Select a template below for your image. There are five themes and each theme has 6 templates. Click "Select"
          to continue.
        </p>
      </div>

      <div className="selection">
        <button
          className={selectedType === 'education' ? 'categoryButton2' : 'categoryButton1'}
          type="button"
          onClick={educationClick}>
          Education
        </button>
        <button
          className={selectedType === 'technology' ? 'categoryButton2' : 'categoryButton1'}
          type="button"
          onClick={technologyClick}>
          Technology
        </button>
        <button
          className={selectedType === 'entertainment' ? 'categoryButton2' : 'categoryButton1'}
          type="button"
          onClick={entertainmentClick}>
          Entertainment
        </button>
        <button
          className={selectedType === 'finance' ? 'categoryButton2' : 'categoryButton1'}
          type="button"
          onClick={financeClick}>
          Finance
        </button>
        <button
          className={selectedType === 'environment' ? 'categoryButton2' : 'categoryButton1'}
          type="button"
          onClick={environmentClick}>
          Environment
        </button>
      </div>

      {selectedType === 'education' && <Education />}
      {selectedType === 'technology' && <Technology />}
      {selectedType === 'entertainment' && <Entertainment />}
      {selectedType === 'finance' && <Finance />}
      {selectedType === 'environment' && <Environment />}
    </>
  );
};

export default Home;
