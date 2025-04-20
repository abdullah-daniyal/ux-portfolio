"use client"

import type React from "react"

import { useState } from "react"
import { Code, Palette, Lightbulb } from "lucide-react"

interface SpecialtyProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  position: string
}

const Specialty = ({ icon, title, description, color, position }: SpecialtyProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`absolute ${position} transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative flex flex-col items-center justify-center rounded-full ${
          isHovered ? "scale-110" : "scale-100"
        } transition-all duration-300 ease-in-out cursor-pointer`}
      >
        <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center ${color} shadow-lg`}>
          <div className="text-white">{icon}</div>
        </div>

        {/* Info popup on hover */}
        <div
          className={`absolute top-full mt-2 bg-white p-3 rounded-lg shadow-lg w-48 z-10 transform ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          } transition-all duration-300 ease-in-out`}
        >
          <h4 className="font-bold text-sm">{title}</h4>
          <p className="text-xs text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function SpecialtyCircles() {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-blue-100/20 to-indigo-100/30 rounded-full blur-3xl"></div>

      {/* Container for positioning circles */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Top circle */}
        <Specialty
          icon={<Palette size={32} />}
          title="UI/UX Design"
          description="Creating intuitive and beautiful user interfaces with a focus on user experience."
          color="bg-gradient-to-br from-purple-500 to-indigo-600"
          position="top-0 left-1/2 -translate-x-1/2"
        />

        {/* Bottom left circle */}
        <Specialty
          icon={<Code size={32} />}
          title="Frontend Development"
          description="Building responsive and interactive web applications with modern technologies."
          color="bg-gradient-to-br from-blue-500 to-cyan-600"
          position="bottom-0 left-1/4 -translate-x-1/2"
        />

        {/* Bottom right circle */}
        <Specialty
          icon={<Lightbulb size={32} />}
          title="Creative Problem Solving"
          description="Finding innovative solutions to complex design and technical challenges."
          color="bg-gradient-to-br from-pink-500 to-rose-600"
          position="bottom-0 right-1/4 translate-x-1/2"
        />
      </div>
    </div>
  )
}
