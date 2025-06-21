"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

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
  const [isInitialized, setIsInitialized] = useState(false)

  const pathname = usePathname()

  const initializeImagePositions = () => {
    const isMobile = window.innerWidth < 768
    const imageCount = isMobile ? 8 : 15

    const sections = Array.from({ length: 5 }, () => {
      return Array.from({ length: imageCount }, () => ({
        x: Math.random() * 120 - 10,
        y: Math.random() * 120 - 10,
        scale: isMobile ? 0.2 + Math.random() * 0.5 : 0.3 + Math.random() * 0.7,
        opacity: isMobile ? 0.1 + Math.random() * 0.25 : 0.15 + Math.random() * 0.35,
        imageIndex: Math.floor(Math.random() * backgroundImages.length),
      }))
    })
    setImagePositions(sections)
    setIsInitialized(true)
  }

  useEffect(() => {
    if (pathname === "/") {
      setIsInitialized(false)
      setScrollY(0)
      setCurrentSection(0)
      const timer = setTimeout(() => {
        initializeImagePositions()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  useEffect(() => {
    if (pathname === "/" && !isInitialized) {
      initializeImagePositions()
    }
  }, [pathname, isInitialized])

  useEffect(() => {
    if (!isInitialized || pathname !== "/") return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const documentHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const scrollProgress = scrollPosition / documentHeight
      const section = Math.floor(scrollProgress * 5)

      setScrollY(scrollPosition)
      setCurrentSection(Math.min(section, 4))
    }

    const handleResize = () => {
      initializeImagePositions()
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [isInitialized, pathname])

  const getCurrentImages = () => {
    if (!isInitialized || !imagePositions[currentSection]) return []

    const nextSection = Math.min(currentSection + 1, 4)
    const documentHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
    const scrollProgress = scrollY / documentHeight
    const sectionProgress = (scrollProgress * 5) % 1

    return imagePositions[currentSection].map((pos, index) => {
      const nextPos = imagePositions[nextSection]?.[index] || pos

      return {
        ...pos,
        x: pos.x + (nextPos.x - pos.x) * sectionProgress * 0.3,
        y: pos.y + (nextPos.y - pos.y) * sectionProgress * 0.3,
        scale: pos.scale + (nextPos.scale - pos.scale) * sectionProgress * 0.4,
        opacity:
          Number(pos.opacity ?? 0) * (1 - sectionProgress * 0.2) +
          Number(nextPos.opacity ?? 0) * sectionProgress * 0.2,
      }
    })
  }

  if (pathname !== "/") {
    return null
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {getCurrentImages().map((pos, index) => {
        const { x, y, scale, opacity, imageIndex } = pos
        const isMobile = window.innerWidth < 768

        const documentHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
        const scrollProgress = scrollY / documentHeight

        const zoomFactor = 1 + Math.sin(scrollProgress * Math.PI * 2 + index * 0.5) * 0.15
        const fadeOffset = Math.cos(scrollProgress * Math.PI * 1.5 + index * 0.3) * 0.1
        const parallaxY = scrollY * (0.02 + (index % 7) * 0.01)

        const safeOpacity = Math.max(
          0,
          Math.min(1, Number(opacity ?? 0) + (Number.isFinite(fadeOffset) ? fadeOffset : 0))
        )

        return (
          <div
            key={`${currentSection}-${index}-${isInitialized ? "init" : "loading"}`}
            className="absolute transition-all duration-2000 ease-out"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) translateY(${parallaxY}px) scale(${scale * zoomFactor})`,
              filter: "blur(1px)",
              opacity: safeOpacity,
            }}
          >
            <Image
              src={backgroundImages[imageIndex] || "/placeholder.svg"}
              alt=""
              width={isMobile ? 200 : 400}
              height={isMobile ? 200 : 400}
              className="object-cover transition-transform duration-3000 ease-in-out"
              {...(index < 5 ? { priority: true } : { loading: "lazy" })}
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
