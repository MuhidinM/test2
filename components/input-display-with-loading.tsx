'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from 'lucide-react'

export default function InputDisplay() {
  const [inputValue, setInputValue] = useState('')
  const [displayedValue, setDisplayedValue] = useState('')
  const [isProcessed, setIsProcessed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = async () => {
    if (isProcessed) {
      // Clear the states
      setInputValue('')
      setDisplayedValue('')
      setIsProcessed(false)
    } else {
      // Process the input
      setIsLoading(true)
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      setDisplayedValue(inputValue)
      setIsProcessed(true)
      setIsLoading(false)
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
      <div className="flex justify-between items-center space-x-4">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your data"
          className="w-3/4"
          disabled={isLoading}
        />
        <Button 
          onClick={handleButtonClick}
          className="w-1/5"
          disabled={isLoading || (!isProcessed && !inputValue)}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </>
          ) : isProcessed ? (
            'Clear'
          ) : (
            'Process'
          )}
        </Button>
      </div>
    </div>
  )
}

