"use client";

import dynamic from 'next/dynamic';
import { faMagnifyingGlass, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import '../../lib/fontawesome.js';
import { useState } from 'react';

const FontAwesomeIcon = dynamic(() =>
    import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon),
    { ssr: true }
);

const Button = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const handleClick = async () => {
        setLoading(true);

        try {
            const response = await fetch('/api/openai', {
                method: 'POST'
            });

            if (!response.ok) throw new Error("Errore nella richiesta API");

            const result = await response.json();
            setData(result);
            alert("Chiamata API completata con successo! 🚀");
        } catch (error) {
            console.error(error);
            alert("Errore nella chiamata API.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-radial from-neutral-700 to-neutral-900">
            <button
                title="PLAY"
                onClick={handleClick}
                disabled={loading}
                className={`flex items-center justify-center bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-xl duration-100 p-4 space-x-4 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {/* Icona per schermi piccoli */}
                <div className='sm:hidden'>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-white block"
                        style={{ fontSize: '2rem' }}  // Imposta la dimensione dell'icona
                    />
                </div>

                <div className='hidden sm:block'>
                    {/* Icona per schermi grandi */}
                    <FontAwesomeIcon
                        icon={faUserSecret}
                        className="text-white hidden"
                        style={{ fontSize: '3rem' }}  // Imposta la dimensione dell'icona
                    />
                </div>


                <span className="text-sm sm:text-4xl text-lime-400 font-bold">
                    {loading ? 'Loading...' : 'PLAY'}
                </span>
            </button>

            {data && (
                <div className="mt-4 text-white">
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Button;
