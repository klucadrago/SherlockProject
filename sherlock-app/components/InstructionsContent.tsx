import React from 'react';

const InstructionsContent = () => {
  return (
    <>
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-center text-lime-400">Istruzioni del Gioco</h1>
      </header>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-white">Obiettivo del Gioco</h2>
        <p className="mt-2 text-white">
          Completa le missioni e accumula il maggior punteggio possibile. Preparati a sfidare te stesso e i tuoi amici!
        </p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-white">Come Giocare</h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>Leggi attentamente le istruzioni.</li>
          <li>Il gioco inizierà non appena l'API risponde.</li>
          <li>Interroga i 5 personaggi seguendo le regole del gioco.</li>
        </ul>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-white">Suggerimenti</h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>Sii rapido e osserva con attenzione i dettagli.</li>
          <li>Utilizza le domande in modo strategico per ottenere le migliori risposte.</li>
        </ul>
      </section>
    </>
  );
};

export default InstructionsContent;