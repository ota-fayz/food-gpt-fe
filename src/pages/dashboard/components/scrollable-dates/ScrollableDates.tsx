import { useState, useRef, useMemo } from 'react'

import type { ScrollableDatesProps } from './types'
import { Container, DateItem } from './styles'

const DAYS_IN_WEEK = 7
const SWIPE_THRESHOLD = 50

// Utility functions for date manipulation
function getDateOnly(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

function isSameDay(date1: Date, date2: Date): boolean {
  return getDateOnly(date1).getTime() === getDateOnly(date2).getTime()
}

function getWeekStart(date: Date): Date {
  const day = date.getDay()
  const diff = date.getDate() - day + (day === 0 ? -6 : 1) // Monday as first day
  return new Date(date.getFullYear(), date.getMonth(), diff)
}

function generateWeekDates(weekStart: Date): Date[] {
  return Array.from({ length: DAYS_IN_WEEK }, (_, i) => addDays(weekStart, i))
}

export const ScrollableDates = ({ activeDate, onChange }: ScrollableDatesProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [startX, setStartX] = useState<number | null>(null)
  
  const today = useMemo(() => getDateOnly(new Date()), [])
  const todayWeekStart = useMemo(() => getWeekStart(today), [today])
  
  const currentWeekStart = useMemo(() => {
    const activeWeekStart = getWeekStart(activeDate)
    return activeWeekStart <= todayWeekStart ? activeWeekStart : todayWeekStart
  }, [activeDate, todayWeekStart])
  
  const [weekOffset, setWeekOffset] = useState(0)
  
  const displayWeekStart = useMemo(() => {
    const offsetWeek = addDays(currentWeekStart, weekOffset * DAYS_IN_WEEK)
    return offsetWeek <= todayWeekStart ? offsetWeek : todayWeekStart
  }, [currentWeekStart, weekOffset, todayWeekStart])
  
  const visibleDates = useMemo(() => generateWeekDates(displayWeekStart), [displayWeekStart])

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startX) return
    
    const currentX = e.touches[0].clientX
    const diff = startX - currentX
    
    if (Math.abs(diff) > 20) {
      e.preventDefault()
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!startX) return
    
    const endX = e.changedTouches[0].clientX
    const diff = startX - endX
    
    if (diff > SWIPE_THRESHOLD) {
      const nextWeekStart = addDays(displayWeekStart, DAYS_IN_WEEK)
      if (nextWeekStart <= todayWeekStart) {
        setWeekOffset(weekOffset + 1)
      }
    } else if (diff < -SWIPE_THRESHOLD) {
      setWeekOffset(weekOffset - 1)
    }
    
    setStartX(null)
  }

  const handleDateClick = (date: Date) => {
    if (date <= today) {
      onChange(date)
    }
  }

  return (
    <Container
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {visibleDates.map((date) => {
        const isActive = isSameDay(date, activeDate)
        const isToday = isSameDay(date, today)
        const isFuture = date > today
        
        return (
          <DateItem
            key={date.toISOString()}
            isActive={isActive}
            isToday={isToday}
            isFuture={isFuture}
            onClick={() => handleDateClick(date)}
          >
            {date.getDate()}
          </DateItem>
        )
      })}
    </Container>
  )
}