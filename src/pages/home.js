import React, { useState } from 'react';

import Education from './education';
import Technology from './technology';
import Entertainment from './entertainment';
import Finance from './finance';
import Environment from './environment';
import './home.css';

const Home = () => {
  const [isShownEducation, setIsShownEducation] = useState(true);
  const [isShownTechnology, setIsShownTechnology] = useState(false);
  const [isShownEntertainment, setIsShownEntertainment] = useState(false);
  const [isShownFinance, setIsShownFinance] = useState(false);
  const [isShownEnvironment, setIsShownEnvironment] = useState(false);

  const educationClick = () => {
    setIsShownEducation(true);
    setIsShownTechnology(false);
    setIsShownEntertainment(false);
    setIsShownFinance(false);
    setIsShownEnvironment(false);
  };

  const technologyClick = () => {
    setIsShownEducation(false);
    setIsShownTechnology(true);
    setIsShownEntertainment(false);
    setIsShownFinance(false);
    setIsShownEnvironment(false);
  };

  const entertainmentClick = () => {
    setIsShownEducation(false);
    setIsShownTechnology(false);
    setIsShownEntertainment(true);
    setIsShownFinance(false);
    setIsShownEnvironment(false);
  };

  const financeClick = () => {
    setIsShownEducation(false);
    setIsShownTechnology(false);
    setIsShownEntertainment(false);
    setIsShownFinance(true);
    setIsShownEnvironment(false);
  };

  const environmentClick = () => {
    setIsShownEducation(false);
    setIsShownTechnology(false);
    setIsShownEntertainment(false);
    setIsShownFinance(false);
    setIsShownEnvironment(true);
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
        <button type="button" onClick={educationClick}>
          Education
        </button>
        <button type="button" onClick={technologyClick}>
          Technology
        </button>
        <button type="button" onClick={entertainmentClick}>
          Entertainment
        </button>
        <button type="button" onClick={financeClick}>
          Finance
        </button>
        <button type="button" onClick={environmentClick}>
          Environment
        </button>
      </div>

      {isShownEducation && <Education />}
      {isShownTechnology && <Technology />}
      {isShownEntertainment && <Entertainment />}
      {isShownFinance && <Finance />}
      {isShownEnvironment && <Environment />}
    </>
  );
};

export default Home;
