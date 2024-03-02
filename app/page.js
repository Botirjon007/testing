import React from "react";
import Quiz from "./quiz/page";
import Layout from "./layout";


const Home = () => {
  // Quiz data
  const quizData = [
    {
      image: "dog.jpg",
      question: "What is the name of this animal?",
      options: ["Dog", "Cat", "Bird", "Fish"],
      correctAnswer: "Dog",
    },
    // Add more quiz items here
  ];

  return (
    <Layout>
      <Quiz quizData={quizData} />
    </Layout>
  );
};

export default Home;
