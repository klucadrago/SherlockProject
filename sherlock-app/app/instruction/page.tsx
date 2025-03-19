import React from 'react';
import InstructionsContent from '../../components/InstructionsContent';
import ApiRedirector from '../../components/ApiRedirector.client';

export const metadata = {
  title: 'Istruzioni - Sherlock Detective Game',
  description: 'Leggi le istruzioni per il gioco investigativo',
};

const InstructionsPage = () => {
  return (
    <div className="min-h-screen bg-radial from-neutral-700 to-neutral-900 p-8">
      <InstructionsContent />
      <ApiRedirector />
    </div>
  );
};

export default InstructionsPage;