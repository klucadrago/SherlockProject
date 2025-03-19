"use client";

import React, { useState } from 'react';

type Character = {
  id: number;
  name: string;
  interrogated: boolean;
  answer?: string;
};

const initialCharacters: Character[] = [
  { id: 1, name: 'Agente Rossi', interrogated: false },
  { id: 2, name: 'Signor Bianchi', interrogated: false },
  { id: 3, name: 'Dott.ssa Verdi', interrogated: false },
  { id: 4, name: 'Ing. Neri', interrogated: false },
  { id: 5, name: 'Prof. Gialli', interrogated: false },
];

const questionsList = [
  "Dove eri la notte del crimine?",
  "Hai notato qualcosa di strano?",
  "Conosci la vittima?",
  "Perché il tuo alibi è debole?"
];

const GameComponent = () => {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);
  const [currentCharacterId, setCurrentCharacterId] = useState<number | null>(null);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

  const handleCharacterClick = (id: number) => {
    const character = characters.find((char) => char.id === id);
    if (character && !character.interrogated) {
      setCurrentCharacterId(id);
      setSelectedQuestions([]);
    }
  };

  const toggleQuestion = (question: string) => {
    if (selectedQuestions.includes(question)) {
      setSelectedQuestions(selectedQuestions.filter((q) => q !== question));
    } else if (selectedQuestions.length < 2) {
      setSelectedQuestions([...selectedQuestions, question]);
    }
  };

  const confirmQuestions = () => {
    if (currentCharacterId === null) return;
    const answer = `Risposta: Ho risposto alle domande "${selectedQuestions.join(
      '" e "'
    )}".`;
    setCharacters(
      characters.map((char) =>
        char.id === currentCharacterId
          ? { ...char, interrogated: true, answer }
          : char
      )
    );
    setCurrentCharacterId(null);
    setSelectedQuestions([]);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/detective-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-75 min-h-screen flex flex-col">
        <header className="p-6 text-center">
          <h1 className="text-5xl font-bold text-lime-400 drop-shadow-lg">
            Interroga i Sospettati
          </h1>
          <p className="mt-2 text-gray-300">
            Scopri la verità e risolvi il mistero!
          </p>
        </header>

        <main className="flex-grow p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {characters.map((character) => (
              <div
                key={character.id}
                onClick={() => handleCharacterClick(character.id)}
                className={`relative p-4 border rounded-lg transition transform hover:scale-105 cursor-pointer ${
                  character.interrogated
                    ? 'opacity-50 cursor-not-allowed'
                    : 'bg-gray-800'
                }`}
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(
                    character.name
                  )}`}
                  alt={character.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="mt-2 text-center">
                  <h2 className="text-2xl font-semibold">{character.name}</h2>
                  {character.interrogated && character.answer && (
                    <p className="mt-1 text-sm italic text-gray-200">
                      {character.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>

        {currentCharacterId !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-11/12 max-w-lg transform transition-all">
              <h2 className="text-3xl font-bold mb-4 text-lime-400">
                Interrogatorio
              </h2>
              <p className="mb-4 text-gray-300">
                Seleziona fino a 2 domande per l'interrogatorio:
              </p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {questionsList.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => toggleQuestion(question)}
                    className={`p-3 border rounded transition ${
                      selectedQuestions.includes(question)
                        ? 'bg-lime-600 border-lime-400'
                        : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                    }`}
                  >
                    {question}
                  </button>
                ))}
              </div>
              <button
                onClick={confirmQuestions}
                disabled={selectedQuestions.length !== 2}
                className="w-full p-3 rounded bg-lime-700 hover:bg-lime-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Conferma Interrogatorio
              </button>
              <button
                onClick={() => {
                  setCurrentCharacterId(null);
                  setSelectedQuestions([]);
                }}
                className="w-full mt-4 p-3 rounded bg-gray-700 hover:bg-gray-600 transition"
              >
                Annulla
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameComponent;