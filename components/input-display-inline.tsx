'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function InputDisplay() {
  const [inputValue, setInputValue] = useState('')
  const [displayedValue, setDisplayedValue] = useState('')
  const [isProcessed, setIsProcessed] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    if (isProcessed) {
      // Clear the states
      setInputValue('')
      setDisplayedValue('')
      setIsProcessed(false)
    } else {
      // Process the input
      setDisplayedValue(inputValue)
      setIsProcessed(true)
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      {displayedValue && (
        <div className="mb-4 p-3 bg-gray-100 rounded">
          <p className="font-semibold">Displayed Data:</p>
          <p>{displayedValue}</p>
        </div>
      )}
      <div className="flex justify-between items-center">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your data"
          className="w-3/4"
        />
        <Button 
          onClick={handleButtonClick}
          className="w-1/5"
        >
          {isProcessed ? 'Clear' : 'Process'}
        </Button>
      </div>
    </div>
  )
}

