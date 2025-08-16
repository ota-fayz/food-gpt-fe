import { useState } from 'react'
import { Container, DateItem } from './styles'

const DAYS_IN_WEEK = 7

const getToday = () => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

const isSameDay = (date1: Date, date2: Date) => {
  return date1.getTime() === date2.getTime()
}

const getWeekDates = () => {
  const today = getToday()
  const currentDay = today.getDay()
  const startOfWeek = new Date(today)
  
  const daysFromMonday = currentDay === 0 ? 6 : currentDay - 1
  startOfWeek.setDate(today.getDate() - daysFromMonday)
  
  const weekDates = []
  for (let i = 0; i < DAYS_IN_WEEK; i++) {
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + i)
    weekDates.push(date)
  }
  
  return weekDates
}

export const Dates = () => {
  const today = getToday()
  const [selectedDate, setSelectedDate] = useState(today)
  const weekDates = getWeekDates()

  const handleDateClick = (date: Date) => {
    if (date <= today) {
      setSelectedDate(date)
    }
  }

  return (
    <Container>
      {weekDates.map((date) => {
        const isActive = isSameDay(date, selectedDate)
        const isToday = isSameDay(date, today)
        const isFuture = date > today
        
        return (
          <DateItem
            key={date.getTime()}
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