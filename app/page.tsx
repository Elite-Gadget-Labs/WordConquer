"use client";
import React from "react";
import LinkButton from "./LinkButton";

export default function Home() {
  return (
    <div>
      <LinkButton title={"Start Test"} link={"/quiz"} />
    </div>
  );
}
