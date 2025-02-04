import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const url = "https://api.quotable.io/random";

function RandomQuoteGeneratorApp() {
  const [quote, setQuote] = useState({
    content: "",
    author: "",
  });

  const fetchQuote = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuote({
        content: data.content,
        author: data.author,
      });
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-class">
      <h1 class="fw-bolder" >Random Quote Generator</h1>
      <p class="fw-semibold" >"{quote.content}"</p>
      <p>- {quote.author}</p>
      <button class="btn btn-dark btn-sm" onClick={fetchQuote}>New Quote</button>
    </div>
  );
}
export default RandomQuoteGeneratorApp;