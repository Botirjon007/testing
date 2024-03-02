// components/Quiz.js
"use client";
import React, { useState } from "react";
import QuizItem from "../quizitem/page";

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answerFeedback, setAnswerFeedback] = useState("");

  const handleAnswerSelect = (selectedOption) => {
    const correctOption = quizData[currentQuestion].correctAnswer;
    // console.log("Selected Option:", selectedOption);
    // console.log("Correct Option:", correctOption);
    if (selectedOption === correctOption) {
      setScore(score + 1);
      setAnswerFeedback("Correct!");
      console.log("Score Updated:", score + 1);
    } else {
      setAnswerFeedback("Incorrect. Try again!");
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      console.log("Next Question:", nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {!showResult ? (
        <div>
          <QuizItem
            item={quizData[currentQuestion]}
            onSelect={handleAnswerSelect}
          />
          {answerFeedback && <p>{answerFeedback}</p>}
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}</p>
          {/* Display any other result details here */}
        </div>
      )}
    </div>
  );
};

export default Quiz; 