"use client";
import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const FeatureFinder = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Pattern Identification</CardTitle>
          <CardDescription>
            Mark off the patterns as you identify them.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start">
            <Checkbox id="pattern1" />
            <Label className="ml-2" htmlFor="pattern1">
              Pattern 1
            </Label>
          </div>
          <div className="flex items-start">
            <Checkbox id="pattern2" />
            <Label className="ml-2" htmlFor="pattern2">
              Pattern 2
            </Label>
          </div>
          <div className="flex items-start">
            <Checkbox id="pattern3" />
            <Label className="ml-2" htmlFor="pattern3">
              Pattern 3
            </Label>
          </div>
          <div className="flex items-start">
            <Checkbox id="pattern4" />
            <Label className="ml-2" htmlFor="pattern4">
              Pattern 4
            </Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FeatureFinder;
