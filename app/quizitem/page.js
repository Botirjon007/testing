// components/QuizItem.js
import React from "react";

const QuizItem = ({ item, onSelect }) => {
  const { image, question, options } = item;

  const handleOptionSelect = (selectedOption) => {
    onSelect(selectedOption); // Call the onSelect function with the selected option
  };

  return (
    <div className="w-40 h-40">
      <img class=" w-40 h-40 " src={image} alt="Quiz item" />
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {/* Add onClick event handler to call handleOptionSelect */}
            <button onClick={() => handleOptionSelect(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizItem;
