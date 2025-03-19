"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ApiRedirector = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/openai', { method: 'POST' })
      .then((response) => {
        if (!response.ok) throw new Error("Errore nella richiesta API");
        return response.json();
      })
      .then((result) => {
        console.log("API result:", result);
        router.push('/game');
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);

  return (
    <div className="mt-8 text-center">
      {loading && <p className="text-gray-300">Attendere, caricamento partita in corso...</p>}
    </div>
  );
};

export default ApiRedirector;