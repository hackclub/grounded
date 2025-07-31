"use client"

import { useEffect, useState } from 'react'

const CircuitBackground = () => {
  const [animationPhase, setAnimationPhase] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 360)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Mouse-following glow effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-green-400/20 via-green-400/10 to-transparent rounded-full blur-xl transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      <div 
        className="absolute w-64 h-64 bg-gradient-radial from-cyan-400/15 via-cyan-400/8 to-transparent rounded-full blur-lg transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0 opacity-15"
        style={{ filter: 'blur(0.8px)' }}
      >
        <defs>
          <pattern id="hexGrid" width="80" height="69.28" patternUnits="userSpaceOnUse">
            <path d="M40 5 L60 20 L60 40 L40 55 L20 40 L20 20 Z" fill="none" stroke="#4ade80" strokeWidth="0.5" opacity="0.4"/>
          </pattern>
          
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#06d6a0" stopOpacity="1"/>
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0.6"/>
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
        
        {/* Dynamic circuit traces */}
        <g className="animate-pulse">
          <path 
            d={`M 0 ${300 + Math.sin(animationPhase * 0.03) * 80} Q 250 ${200 + Math.cos(animationPhase * 0.02) * 60} 500 ${250 + Math.sin(animationPhase * 0.025) * 70} T 1000 ${220 + Math.cos(animationPhase * 0.02) * 80}`}
            stroke="url(#pulseGradient)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.7"
            filter="url(#glow)"
          />
          <path 
            d={`M 0 ${500 + Math.cos(animationPhase * 0.025) * 100} Q 400 ${400 + Math.sin(animationPhase * 0.015) * 80} 800 ${450 + Math.cos(animationPhase * 0.02) * 90} T 1600 ${420 + Math.sin(animationPhase * 0.018) * 70}`}
            stroke="#06d6a0" 
            strokeWidth="1.8" 
            fill="none"
            opacity="0.5"
            filter="url(#glow)"
          />
          <path 
            d={`M 0 ${150 + Math.sin(animationPhase * 0.02) * 60} L 200 ${120 + Math.cos(animationPhase * 0.025) * 40} L 400 ${160 + Math.sin(animationPhase * 0.03) * 50} L 600 ${140 + Math.cos(animationPhase * 0.02) * 45}`}
            stroke="#22d3ee" 
            strokeWidth="1.5" 
            fill="none"
            opacity="0.6"
            filter="url(#glow)"
          />
        </g>
        
        {/* Animated connection nodes */}
        <circle 
          cx={150 + Math.sin(animationPhase * 0.015) * 30} 
          cy={200 + Math.cos(animationPhase * 0.02) * 25} 
          r="4" 
          fill="#4ade80" 
          className="animate-pulse"
          filter="url(#glow)"
        />
        <circle 
          cx={400 + Math.cos(animationPhase * 0.018) * 35} 
          cy={400 + Math.sin(animationPhase * 0.025) * 30} 
          r="3" 
          fill="#06d6a0" 
          className="animate-pulse"
          filter="url(#glow)"
        />
        <circle 
          cx={700 + Math.sin(animationPhase * 0.02) * 25} 
          cy={300 + Math.cos(animationPhase * 0.022) * 35} 
          r="3.5" 
          fill="#22d3ee" 
          className="animate-pulse"
          filter="url(#glow)"
        />
      </svg>
      
      {/* Floating particles with mouse interaction */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default CircuitBackground