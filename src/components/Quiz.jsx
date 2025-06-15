import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, CardContent } from "./ui/card";

export const Quiz = () => {
  const { number } = useParams();
  const [difficulty, setDifficulty] = useState("easy");
  const [result, setResult] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

    const decideDifficulty = (number) => {
    if (number === "1" || number === "2" || number === "3")
      setDifficulty("easy");
    else if (number === "4" || number === "5" || number === "6")
      setDifficulty("medium");
    else if (
      number === "7" ||
      number === "8" ||
      number === "9" ||
      number === "10"
    )
      setDifficulty("hard");
  };

  const callAPI = async (amount, category) => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    const result = await response.json();
    console.log(result);
    setResult(result.results);
    console.log(result.results);
  };


  const shuffleAnswers = (currentQ) => {
    if (!currentQ) return [];
    const answers = [...currentQ.incorrect_answers, currentQ.correct_answer];
    // Fisher-Yates shuffle algorithm
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers.map((answer) =>(answer));
  };

  const checkAnswer = (selectedAnswer) => {
    if (answerSelected) return;

    setAnswerSelected(true);
    setUserAnswer(selectedAnswer);

    if (selectedAnswer === result[currentQuestion]?.correct_answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < result.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer(null);
        setAnswerSelected(false);
      } else {
        setIsGameOver(true);
      }
    }, 1000);
  };

  useEffect(() => {
    decideDifficulty(number);
    callAPI(20, 17, "easy");
  }, []);

  useEffect(() => {
    if (result[currentQuestion]) {
      setShuffledAnswers(shuffleAnswers(result[currentQuestion]));
    }
  }, [currentQuestion, result]);

  if (isGameOver) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Game Over!</h2>
          <div className="text-center">
            <p className="text-xl mb-4">
              Final Score: {score}/{result.length}
            </p>
            <p className="text-lg mb-4">
              Success Rate: {Math.round((score / result.length) * 100)}%
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Score: {score}</span>
          <span className="text-lg">
            Question {currentQuestion + 1}/{result.length}
          </span>
        </div>
        
        <Card className="mb-4">
          <CardContent className="p-6">
            <p dangerouslySetInnerHTML={{__html:`${result[currentQuestion]?.question}`}} className="text-lg font-medium mb-6 text-center"/>
             
            <div className="space-y-3">
              {shuffledAnswers.map((option) => (
                <p
                  key={option}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                    answerSelected
                      ? option === result[currentQuestion]?.correct_answer
                        ? "border-green-500 bg-green-100"
                        : userAnswer === option
                        ? "border-red-500 bg-red-100"
                        : ""
                      : ""
                  }`}
                  onClick={() => checkAnswer(option)}
                >
                  {option}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / result.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
