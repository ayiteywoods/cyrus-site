'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Define a type for timeLeft
type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

// Launch target date
const targetDate = new Date('2025-06-01T00:00:00')

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  function calculateTimeLeft(): TimeLeft {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    const time = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }

    return difference > 0 ? time : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-600/70 text-white px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-xl w-full space-y-10"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          Page <span className="text-purple-300">Coming</span> Soon
        </motion.h1>

        <motion.p className="text-lg text-white/80">
          Our team is working hard behind the scenes to bring you something amazing.
        </motion.p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-6 text-white/90 text-center">
          {(['days', 'hours', 'minutes', 'seconds'] as (keyof TimeLeft)[]).map((unit) => (
            <div key={unit}>
              <div className="text-4xl font-bold">{timeLeft[unit]}</div>
              <div className="text-sm uppercase tracking-wide">{unit}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
