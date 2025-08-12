import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

interface ScrollableDatesProps {
  dates: number[]
  activeDate: number
  onChange: (date: number) => void
}

const DateTab = styled(Tab)(({ theme }) => ({
  minWidth: 0,
  padding: theme.spacing(1.25, 1.25),
  textTransform: 'none',
  fontSize: 20,
  color: '#343434',
  '&.Mui-selected': {
    color: '#C1C1C1',
  },
  '& .tab-label': {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
  },
  '&.Mui-selected .tab-label': {
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
}))

export const ScrollableDates = ({ dates, activeDate, onChange }: ScrollableDatesProps) => {
  const activeIndex = Math.max(0, dates.findIndex((d) => d === activeDate))

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={activeIndex}
        onChange={(_, idx) => onChange(dates[idx])}
        variant="scrollable"
        scrollButtons={false}
        sx={{
          width: '100%',
          '& .MuiTabs-scroller': {
            overflowX: 'auto !important',
            WebkitOverflowScrolling: 'touch',
          },
          '& .MuiTabs-indicator': { display: 'none' },
        }}
      >
        {dates.map((date) => (
          <DateTab key={date} label={<span className="tab-label">{date}</span>} />
        ))}
      </Tabs>
    </Box>
  )
}

export default ScrollableDates


