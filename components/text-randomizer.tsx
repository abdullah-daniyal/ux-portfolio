"use client"

import { useState, useEffect } from "react"

interface TextRandomizerProps {
  words: string[]
  interval?: number
  className?: string
}

export default function TextRandomizer({ words, interval = 3000, className = "" }: TextRandomizerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)

      // Wait for fade out animation to complete
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsAnimating(false)
      }, 500)
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval])

  return (
    <span className={`inline-block relative ${className}`}>
      <span className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
        {words[currentIndex]}
      </span>
    </span>
  )
}
