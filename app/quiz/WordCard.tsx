import React from "react";
import {
  CardHeader,
  CardFooter,
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SpeakerIcon from "./SpeakerIcon";

interface pattern {
  name: string; // repeated-letters, embedded-words, common-pairings
  list: string[];
}

interface WordCardProps {
  word: {
    title: string;
    pronounciation: string;
    meaning: string;
    letterCount: number;
    patterns: pattern[];
  };
}

const WordCard = ({
  word: { title, pronounciation, meaning, letterCount, patterns },
}: WordCardProps) => {
  return (
    <>
      <Card className="bg-[#f5f5f5] dark:bg-[#2d2d2d] text-[#333] dark:text-[#ccc] w-full max-w-md mx-auto">
        <CardHeader className="flex justify-center items-center h-64">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">{title}</h2>
            <p className="text-lg mb-2">/{pronounciation}/</p>
            <p className="text-sm">{meaning}</p>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end items-center">
          <Button size="icon" variant="ghost">
            <SpeakerIcon />
            <span className="sr-only">Pronounce</span>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default WordCard;
