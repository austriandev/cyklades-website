"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const backgroundImages = [
  "/images/bg1.png",
  "/images/bg2.png",
  "/images/bg3.png",
  "/images/bg4.png",
  "/images/bg5.png",
  "/images/bg6.png",
  "/images/bg7.png",
  "/images/bg8.png",
  "/images/bg9.png",
  "/images/logo.png",
  "/images/bg10.png",
  "/images/bg11.png",
  "/images/bg12.png",
  "/images/bg13.png",
  "/images/bg14.png",
  "/images/bg15.png",
  "/images/bg16.png",
  "/images/bg17.png",
  "/images/bg18.png",
  "/images/bg19.png",
]

export default function BackgroundGallery() {
  const [scrollY, setScrollY] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [imagePositions, setImagePositions] = useState<
    Array<Array<{ x: number; y: number; scale: number; opacity: number; imageIndex: number }>>
  >([])

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const imageCount = isMobile ? 8 : 15

    // Create 5 different background sections with different image arrangements
    const sections = Array.from({ length: 5 }, (_, sectionIndex) => {
      return Array.from({ length: imageCount }, (_, imageIndex) => ({
        x: Math.random() * 120 - 10,
        y: Math.random() * 120 - 10,
        scale: isMobile ? 0.2 + Math.random() * 0.5 : 0.3 + Math.random() * 0.7,
        opacity: isMobile ? 0.1 + Math.random() * 0.25 : 0.15 + Math.random() * 0.35,
        imageIndex: Math.floor(Math.random() * backgroundImages.length),
      }))
    })
    setImagePositions(sections)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = scrollPosition / documentHeight

      // Calculate section based on total scroll progress (0 to 1)
      const section = Math.floor(scrollProgress * 5)

      setScrollY(scrollPosition)
      setCurrentSection(Math.min(section, 4)) // Max 5 sections (0-4)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getCurrentImages = () => {
    if (!imagePositions[currentSection]) return []

    const nextSection = Math.min(currentSection + 1, 4)
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollProgress = scrollY / documentHeight
    const sectionProgress = (scrollProgress * 5) % 1 // Progress within current section

    return imagePositions[currentSection].map((pos, index) => {
      const nextPos = imagePositions[nextSection]?.[index] || pos

      return {
        ...pos,
        x: pos.x + (nextPos.x - pos.x) * sectionProgress * 0.3,
        y: pos.y + (nextPos.y - pos.y) * sectionProgress * 0.3,
        scale: pos.scale + (nextPos.scale - pos.scale) * sectionProgress * 0.4,
        opacity: pos.opacity * (1 - sectionProgress * 0.2) + (nextPos.opacity || 0) * sectionProgress * 0.2,
      }
    })
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {getCurrentImages().map((pos, index) => {
        const { x, y, scale, opacity, imageIndex } = pos
        const isMobile = window.innerWidth < 768

        // Improved scroll-based animations that work throughout entire scroll
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollProgress = scrollY / documentHeight

        const zoomFactor = 1 + Math.sin(scrollProgress * Math.PI * 2 + index * 0.5) * 0.15
        const fadeOffset = Math.cos(scrollProgress * Math.PI * 1.5 + index * 0.3) * 0.1
        const parallaxY = scrollY * (0.02 + (index % 7) * 0.01)

        return (
          <div
            key={`${currentSection}-${index}`}
            className="absolute transition-all duration-2000 ease-out"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) translateY(${parallaxY}px) scale(${scale * zoomFactor})`,
              filter: "blur(1px)",
              opacity: Math.max(0, Math.min(1, opacity + fadeOffset)),
            }}
          >
            <Image
              src={backgroundImages[imageIndex] || "/placeholder.svg"}
              alt=""
              width={isMobile ? 200 : 400}
              height={isMobile ? 200 : 400}
              className="object-cover transition-transform duration-3000 ease-in-out"
              priority={index < 5}
              loading="lazy"
            />
          </div>
        )
      })}

      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `linear-gradient(${45 + scrollY * 0.02}deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)`,
        }}
      />
    </div>
  )
}
