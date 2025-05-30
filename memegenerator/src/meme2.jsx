import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header1 from "./header1"

function Memes() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    try {
      const res = await axios.get('https://memegenerator-o4yf.onrender.com/api/memes');
      setMemes(res.data.memes);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <header >
        <Header1 />
    </header>

    <section className=" min-h-screen bg-red-100 p-4 flex flex-col justify-center items-center  ">
              <h1 className="text-4xl font-bold  italic text-center mb-10">Memes</h1>
   


      <section className="grid grid-cols-1 gap-8 pr-[38%] pl-[38%] ">
        {memes.map((meme, index) => (
          <section key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={meme.url} alt={meme.title} className="w-full object-contain" />
            <section className="p-4">
              <h2 className="font-semibold text-lg">{meme.title}</h2>
            </section>
          </section>
        ))}
      </section>
      <section className="flex justify-center mt-6">
        <button
          onClick={fetchMemes}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
        >
          Load More
        </button>
      </section>
    </section>
    </>
  );
}

export default Memes;
