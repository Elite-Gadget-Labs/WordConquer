import React from "react";
import WordCard from "./WordCard";
import { hardcodedWords } from "./words";

interface pattern {
  name: string; // repeated-letters, embedded-words, common-pairings
  list: string[];
  description: string;
}

interface WordCardProps {
  title: string;
  pronounciation: string;
  meaning: string;
  letterCount: number;
  patterns: pattern[];
}

interface QuizProps {
  words: WordCardProps[];
}

const QuizPage = ({ words }: QuizProps) => {
  return (
    <div>
      {/* <h1>Quiz Page</h1> */}

      <WordCard word={hardcodedWords[0]} />
    </div>
  );
};

export default QuizPage;
