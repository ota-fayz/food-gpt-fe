import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import type { PlanDrawerProps } from '../types'
import { 
  PlanContainer,
  PlanHeader,
  PlanTitle,
  CalorieCard,
  CalorieIcon,
  CalorieContent,
  CalorieLabel,
  CalorieValue,
  MacroGrid,
  MacroCard,
  MacroIcon,
  MacroLabel,
  MacroValue,
  RecommendButton,
  RecommendationText
} from './styles'

export const PlanDrawer = ({ open, onClose, plan, onSave }: PlanDrawerProps) => {
  const handleRecommendClick = () => {
    // Устанавливаем рекомендуемые значения
    onSave?.(plan)
  }

  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      <PlanContainer>
        <PlanHeader>
          <IconButton onClick={onClose} size="large">
            <CloseIcon />
          </IconButton>
          <PlanTitle>Ваш план</PlanTitle>
          <div style={{ width: 48 }} /> {/* Спейсер для центрирования */}
        </PlanHeader>
        
        <CalorieCard>
          <CalorieIcon>🔥</CalorieIcon>
          <CalorieContent>
            <CalorieLabel>Калорий</CalorieLabel>
            <CalorieValue>{plan.calories}</CalorieValue>
          </CalorieContent>
        </CalorieCard>

        <MacroGrid>
          {plan.macros.map((macro) => (
            <MacroCard key={macro.label}>
              <MacroIcon style={{ backgroundColor: macro.color + '20' }}>
                {macro.icon}
              </MacroIcon>
              <MacroLabel>{macro.label}</MacroLabel>
              <MacroValue>{macro.value}{macro.unit}</MacroValue>
            </MacroCard>
          ))}
        </MacroGrid>

        <RecommendButton onClick={handleRecommendClick}>
          📊 Установить рекомендуемые
        </RecommendButton>

        <RecommendationText>
          Рекомендации основаны на вашей цели и личных данных
        </RecommendationText>
      </PlanContainer>
    </Drawer>
  )
}
