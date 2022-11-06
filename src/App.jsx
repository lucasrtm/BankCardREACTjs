import React from 'react';
import './styles/App.css';
import { LeftSide } from './components/leftSide/leftSide';
import { RightSide } from './components/rightSide/rightSide';

export default function App() {
    return (
      <div className="App">
        <LeftSide />
        <RightSide />
      </div>
    );
  }