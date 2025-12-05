import axios from "axios";
import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");

  const fetchQuotes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes");
      const randomIndex = Math.floor(Math.random() * response.data.quotes.length);
      const randomQuote = response.data.quotes[randomIndex].quote;
      setQuote(randomQuote);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleClick = () => {
    fetchQuotes();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 drop-shadow-lg">
        Refresh for a Different Quote 
      </h1>

      <div className="bg-white text-black shadow-2xl rounded-xl p-6 max-w-xl text-center border-4 border-purple-700">
        <p className="text-xl font-semibold italic">{quote || "Loading..."}</p>
      </div>

      <button
        onClick={handleClick}
        className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
      >
        New Quote 
      </button>
    </div>
  );
};

export default Quotes;
