'use client';
import React, { useState, useEffect } from 'react';
import PasswordScreen from './components/Password';
import LoadingScreen from './components/Loading';
import SurveyScreen from './components/Survey';
import TheQuestion from './components/TheQuestion';
import YesResponse from './components/Yes';
import NoResponse from './components/No';
import { generateSweethearts, sendSurveyEmail, CORRECT_PASSWORD } from './Helpers';

export default function ValentineApp() {
  // State management
  const [screen, setScreen] = useState('password');
  const [password, setPassword] = useState('');
  const [surveyAnswers, setSurveyAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: ''
  });
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Generate sweethearts once
  const [sweethearts] = useState(() => generateSweethearts(15));

  // Handle password submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setScreen('loading');
      setTimeout(() => {
        setScreen('survey');
      }, 5000);
    } else {
      alert('Incorrect password. Please try again!');
    }
  };

  // Handle survey changes
  const handleSurveyChange = (question, value) => {
    setSurveyAnswers(prev => ({
      ...prev,
      [question]: value
    }));
  };

  // Handle survey submission
  const handleSurveySubmit = (e) => {
    e.preventDefault();
    console.log('Survey Answers:', surveyAnswers);
    setScreen('valentine');
  };

  // Handle valentine response
  const handleValentineResponse = (response) => {
    if (response === 'yes') {
      sendSurveyEmail(surveyAnswers);
      setScreen('yes');
      setShowConfetti(true);
    } else {
      setScreen('no');
    }
  };

  // Confetti timeout effect
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  // Render appropriate screen
  switch (screen) {
    case 'password':
      return (
        <PasswordScreen
          password={password}
          setPassword={setPassword}
          onSubmit={handlePasswordSubmit}
          sweethearts={sweethearts}
        />
      );
    
    case 'loading':
      return <LoadingScreen sweethearts={sweethearts} />;
    
    case 'survey':
      return (
        <SurveyScreen
          surveyAnswers={surveyAnswers}
          onSurveyChange={handleSurveyChange}
          onSubmit={handleSurveySubmit}
          sweethearts={sweethearts}
        />
      );
    
    case 'valentine':
      return (
        <TheQuestion
          onResponse={handleValentineResponse}
          sweethearts={sweethearts}
        />
      );
    
    case 'yes':
      return <YesResponse showConfetti={showConfetti} />;
    
    case 'no':
      return <NoResponse />;
    
    default:
      return null;
  }
}