"use client";

import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      console.log("Risposta API:", data);

      if (data.choices && data.choices.length > 0) {
        setResponse(data.choices[0].message.reasoning);
      } else {
        setResponse("Nessuna risposta valida ricevuta dall'API.");
      }
    } catch (error) {
      console.error(error);
      setResponse('Si è verificato un errore durante la richiesta.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Chat con OpenAI</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Inserisci il tuo prompt qui..."
          rows={4}
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: isLoading ? '#ccc' : '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {isLoading ? 'Invio in corso...' : 'Invia'}
        </button>
      </form>

      {response && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
          <h2>Risposta:</h2>
          <p style={{ whiteSpace: 'pre-wrap' }}>{response}</p>
        </div>
      )}
    </div>
  );
}