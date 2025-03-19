import React from 'react';
import GameComponent from '../../components/GameComponent.client';

export const metadata = {
  title: 'Gioco - Sherlock Detective Game',
  description: 'Interroga i sospettati e risolvi il mistero in questo gioco investigativo',
};

const GamePage = () => {
  return <GameComponent />;
};

export default GamePage;