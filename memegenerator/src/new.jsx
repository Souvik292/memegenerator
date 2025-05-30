import React, { useState } from 'react';
import axios from 'axios';

const MemeGeneratormood = () => {
  const [mood, setMood] = useState('');
  const [meme, setMeme] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMeme = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:4000/api/meme/${mood}`);
      setMeme(res.data.meme);
    } catch (err) {
      console.error('Error fetching meme:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 gap-4">
      <h1 className="text-3xl font-bold">Mood-Based Meme Generator</h1>
      <input
        type="text"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        placeholder="Enter your mood (happy, sad, angry, etc.)"
        className="p-2 border rounded-md w-full max-w-md"
      />
      <button
        onClick={getMeme}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate Meme
      </button>

      {loading && <p>Loading...</p>}

      {meme && (
        <div className="mt-6 w-full max-w-md rounded-xl shadow-lg p-4 bg-white text-center">
          <h2 className="text-xl font-semibold mb-2">{meme.name}</h2>
          <img src={meme.url} alt={meme.name} className="rounded-md w-full" />
        </div>
      )}
    </div>
  );
};

export default MemeGeneratormood;
