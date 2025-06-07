// App.jsx (or your main file)
import React from 'react';
import Counter from './components/Counter.jsx';
import StudentInfo from './components/StudentInfo.jsx';
import WelcomeCard from './components//WelcomeCard.jsx';

export default function App() {
  return (
    <div style={{ padding: '2rem', minHeight: '100vh', backgroundColor: '#f7fafc' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
        React/NextJS Components
      </h1>
      
      <WelcomeCard name="Clyde Justine" />
      <Counter />
      <StudentInfo />

    </div>
  );  
}