import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./calculatorstyle.css";
function SimpleCalculator() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch(error) {
        setResult("Error");
      }
    } 
    else if (value === "C") {
      setResult("");
      setInput("");
    } 
    else {
      setInput((prevInput) => (prevInput + value));
    }
  };

  useEffect(()=>{
    const handleKeyDown=(event)=>{
      const {key} = event;

      const keys={
        "0":"0",
        "1":"1",
        "2":"2",
        "3":"3",
        "4":"4",
        "5":"5",
        "6":"6",
        "7":"7",
        "8":"8",
        "9":"9",
        "+":"+",
        "-":"-",
        "x":"*",
        "/":"/",
        ".":".",
        Enter:"=",
        Backspace:"C"

      };
      if (keys[key]){
        handleClick(keys[key]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return()=>{
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  return (
    <>
      <table className="table-class">
        <tbody>
          <tr className="table-row-class">
            <td colSpan={4}>
              <input type="text" value={input} readOnly /><br/>
              <input type="text" value={result} readOnly />
            </td>
          </tr>
          <tr className="table-row-class">
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("7")}>
                7
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("8")}>
                8
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("9")}>
                9
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("+")}>
                +
              </button>
            </td>
          </tr>
          <tr className="table-row-class">
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("4")}>
                4
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("5")}>
                5
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("6")}>
                6
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("-")}>
                -
              </button>
            </td>
          </tr>
          <tr className="table-row-class">
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("1")}>
                1
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("2")}>
                2
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("3")}>
                3
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("*")}>
                x
              </button>
            </td>
          </tr>
          <tr className="table-row-class">
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("C")}>
                C
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("0")}>
                0
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("=")}>
                =
              </button>
            </td>
            <td>
              <button class="btn btn-dark" onClick={() => handleClick("/ ")}>
                /
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default SimpleCalculator;
