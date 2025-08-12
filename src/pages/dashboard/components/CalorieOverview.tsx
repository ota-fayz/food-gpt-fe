import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import LinearProgress from '@mui/material/LinearProgress'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'

interface MacroItem {
  label: string
  current: number
  target: number
  color: string
}

interface CalorieOverviewProps {
  remainingCalories: number
  addition: number
  macros: MacroItem[]
}

const GaugeWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
}))

const Card = styled('div')(({ theme }) => ({
  backgroundColor: '#FEFEFE',
  borderRadius: 16,
  padding: theme.spacing(2.5),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
}))

function calculateProgress(current: number, target: number) {
  return Math.min((current / target) * 100, 100)
}

export const CalorieOverview = ({ remainingCalories, addition, macros }: CalorieOverviewProps) => {
  // Clean gauge using MUI CircularProgress overlayed to mimic arc
  const percentage = 60
  const size = 160
  const thickness = 6

  return (
    <Card>
      <GaugeWrapper>
        <Box sx={{ position: 'relative', width: size, height: size }}>
          <CircularProgress variant="determinate" value={100} size={size} thickness={thickness} sx={{ color: '#E6E6E6' }} />
          <CircularProgress variant="determinate" value={percentage} size={size} thickness={thickness} sx={{ color: '#000', position: 'absolute', left: 0, top: 0 }} />
          <Stack sx={{ position: 'absolute', inset: 0 }} alignItems="center" justifyContent="center" spacing={0.5}>
            <Typography variant="h4" fontWeight={700}>{remainingCalories}</Typography>
            <Typography variant="caption" color="text.secondary">Калорий осталось</Typography>
            <Typography variant="caption">+{addition}</Typography>
          </Stack>
        </Box>

        <Stack flex={1} spacing={2}>
          {macros.map((m) => (
            <Stack key={m.label} spacing={0.5}>
              <Typography variant="subtitle2">{m.label}</Typography>
              <LinearProgress
                variant="determinate"
                value={calculateProgress(m.current, m.target)}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#E8E8E8',
                  '& .MuiLinearProgress-bar': { backgroundColor: m.color },
                }}
              />
              <Typography variant="caption" color="text.secondary">{m.current}/{m.target}г</Typography>
            </Stack>
          ))}
        </Stack>
      </GaugeWrapper>
    </Card>
  )
}

export default CalorieOverview


