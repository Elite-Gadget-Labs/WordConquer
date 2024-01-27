"use client";
import React, { useState } from "react";
import WordCard from "./WordCard";
import { words } from "./words";
import FeatureFinder from "./FeatureFinder";

// Interfaces
interface Pattern {
  name: string; // Types: repeated-letters, embedded-words, common-pairings
  list: string[];
  description: string;
}

interface WordCardProps {
  title: string;
  pronunciation: string;
  meaning: string;
  letterCount: number;
  patterns: Pattern[];
}

// QuizPage Component
const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeatureFinder, setShowFeatureFinder] = useState(false);

  const handleStartClick = () => {
    setShowFeatureFinder(true);
  };

  const handleNextClick = () => {
    /*
    if (!showFeatureFinder) {
      setShowFeatureFinder(true);
    } else if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowFeatureFinder(false);
      
    }*/
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowFeatureFinder(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl mb-4">
        Your Word is: {words[currentIndex].title}
      </h1>
      <WordCard
        title={words[currentIndex].title}
        pronounciation={words[currentIndex].pronounciation}
        meaning={words[currentIndex].meaning}
        letterCount={words[currentIndex].letterCount}
        patterns={words[currentIndex].patterns}
      />
      {!showFeatureFinder ? (
        <div className="flex flex-col items-center">
          <div className="mt-5 flex justify-between w-full">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handlePreviousClick}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <FeatureFinder />
      )}
      <button className="btn btn-primary" onClick={handleStartClick}>
        Start
      </button>
    </div>
  );
};

export default QuizPage;
