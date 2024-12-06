"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { processInput } from "@/app/input-server";

export default function InputDisplay() {
  const [inputValue, setInputValue] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");
  const [isProcessed, setIsProcessed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async (e: FormEvent) => {
    e.preventDefault();

    if (isProcessed) {
      setInputValue("");
      setDisplayedValue("");
      setIsProcessed(false);
    } else {
      setIsLoading(true);
      const processedValue = await processInput(inputValue);
      setDisplayedValue(processedValue);
      setIsProcessed(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      {displayedValue && (
        <div className="mb-4 p-3 bg-gray-100 rounded">
          <p className="font-semibold">Displayed Data:</p>
          <p>{displayedValue}</p>
        </div>
      )}
      <form
        className="flex justify-between items-center space-x-4"
        onSubmit={handleButtonClick}
      >
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your data"
          className="w-3/4"
          disabled={isLoading}
        />
        <Button
          type="submit"
          className="w-1/5"
          disabled={isLoading || (!isProcessed && !inputValue)}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </>
          ) : isProcessed ? (
            "Clear"
          ) : (
            "Process"
          )}
        </Button>
      </form>
    </div>
  );
}
