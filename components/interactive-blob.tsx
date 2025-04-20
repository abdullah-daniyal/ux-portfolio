"use client"

import { useRef, useEffect } from "react"

export default function InteractiveBlob() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (!container) return

      const { width, height } = container.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Blob parameters
    const points = 12
    const radius = Math.min(canvas.width, canvas.height) * 0.4
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const randomFactors = Array.from({ length: points }, () => Math.random() * 0.5 + 0.5)

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosition.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    }

    // Handle touch movement for mobile
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0]
        const rect = canvas.getBoundingClientRect()
        mousePosition.current = {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.5)
      gradient.addColorStop(0, "rgba(224, 231, 255, 0.8)")
      gradient.addColorStop(0.5, "rgba(199, 210, 254, 0.7)")
      gradient.addColorStop(1, "rgba(165, 180, 252, 0.5)")

      // Calculate mouse influence
      const mouseX = mousePosition.current.x || centerX
      const mouseY = mousePosition.current.y || centerY
      const mouseDistX = (mouseX - centerX) / canvas.width
      const mouseDistY = (mouseY - centerY) / canvas.height

      // Draw blob
      ctx.beginPath()

      const time = Date.now() / 1000

      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2
        const randomFactor = randomFactors[i % points]

        // Calculate point position with noise
        const noiseFactor = Math.sin(time * randomFactor + i) * 0.2 + 0.8
        const distortionX = mouseDistX * 30
        const distortionY = mouseDistY * 30

        const x = centerX + Math.cos(angle) * radius * noiseFactor + distortionX
        const y = centerY + Math.sin(angle) * radius * noiseFactor + distortionY

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()

      // Add subtle glow effect
      ctx.shadowColor = "rgba(165, 180, 252, 0.5)"
      ctx.shadowBlur = 20

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
}
