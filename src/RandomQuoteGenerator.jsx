import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomQuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const fetchQuote = async () => {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    setQuote(data[randomIndex].text);
    setAuthor(data[randomIndex].author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <p>"{quote}"</p>
      <p>- {author}</p>
      <button onClick={handleNewQuote}>New Quote</button>
    </div>
  );
}


  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => {
  //       setQuote(response.data[0].email);
  //     });
  //   console.log("Am Called");
  // }, []);

  // return (
  //   <div>
  //     <h1>Random Quote Generator</h1>
  //     <p>"{quote}"</p>
  //     {/* <p>- {author}</p> */}
  //     {/* <button onClick={handleNewQuote}>New Quote</button> */}
  //   </div>
  // );
// }

export default RandomQuoteGenerator;
