import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import AddIcon from '@mui/icons-material/Add'

import type { CalorieOverviewProps } from './types'
import type { MacroData } from '../../../../types'
import { 
  Card, 
  CircularContainer, 
  CalorieContent, 
  CalorieNumber, 
  MacroHeader, 
  MacroLabel, 
  MacroValue, 
  MacroProgressBar, 
  MacroProgress, 
  AdditionButton 
} from './styles'

const CALORIE_PROGRESS_SIZE = 200
const CALORIE_PROGRESS_THICKNESS = 8

function calculateProgress(current: number, target: number) {
  return Math.min((current / target) * 100, 100)
}

export const CalorieOverview = ({ remainingCalories, addition, macros }: CalorieOverviewProps) => {
  const totalProgress = macros.reduce((acc, macro) => acc + calculateProgress(macro.current, macro.target), 0) / macros.length

  return (
    <Card>
      <CircularContainer>
        <CircularProgress 
          variant="determinate" 
          value={100} 
          size={CALORIE_PROGRESS_SIZE} 
          thickness={CALORIE_PROGRESS_THICKNESS} 
        />
        <CircularProgress 
          variant="determinate" 
          value={totalProgress} 
          size={CALORIE_PROGRESS_SIZE} 
          thickness={CALORIE_PROGRESS_THICKNESS} 
        />
        <CalorieContent>
          <CalorieNumber>
            {remainingCalories}
          </CalorieNumber>
          <Typography variant="body2" color="text.secondary">
            Калорий осталось
          </Typography>
          <AdditionButton startIcon={<AddIcon />}>
            {addition}
          </AdditionButton>
        </CalorieContent>
      </CircularContainer>

      <Stack spacing={2} flex={1}>
        {macros.map((macro: MacroData) => (
          <Stack key={macro.label} spacing={0.5}>
            <MacroHeader>
              <MacroLabel>{macro.label}</MacroLabel>
              <MacroValue>{macro.current}/{macro.target}г</MacroValue>
            </MacroHeader>
            <MacroProgressBar>
              <MacroProgress 
                width={calculateProgress(macro.current, macro.target)}
                color={macro.color}
              />
            </MacroProgressBar>
          </Stack>
        ))}
      </Stack>
    </Card>
  )
}