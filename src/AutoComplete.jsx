import { useState } from "react";
import "./Autocomplete.css";

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchResults = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "peach",
    "raspberry",
    "strawberry",
    "tangerine",
    "watermelon",
  ];

  // Function to get filtered suggestions based on input value
  const getSuggestions = (value) => {
    const normalizedValue = value.toLowerCase();
    return searchResults
      .filter((result) => result.toLowerCase().includes(normalizedValue))
      .slice(0, 5);
  };

  // Event handler for input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSuggestions(getSuggestions(value));
  };

  // Event handler for form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search Query: ", inputValue);
  };

  // Event handler for clear button click
  const handleClear = () => {
    setInputValue("");
    setSuggestions([]);
  };

  return (
    <form className="autocomplete-form" onSubmit={handleSubmit}>
      <div className="autocomplete autocomplete-container">
        <input
          type="text"
          placeholder="Search Fruits..."
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue && (
          <button className="autocomplete-clear" onClick={handleClear}>
            Clear
          </button>
        )}
        {suggestions.length > 0 && (
          <div className="autocomplete-dropdown">
            <ul>
              {suggestions.map((result) => (
                <li key={result}>
                  <a className="render-list">{result}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </form>
  );
};

export default AutoComplete;
