import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import type { PlanSheetProps } from './types'
import { 
  Container, 
  Header, 
  Title, 
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

export const PlanSheet = ({ open, onClose, plan, onSave }: PlanSheetProps) => {
  const handleRecommendClick = () => {
    // TODO: Implement recommendation logic
    console.log('Set recommended values')
    onSave?.(plan)
  }

  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      <Container>
        <Header>
          <IconButton onClick={onClose} size="large">
            <CloseIcon />
          </IconButton>
          <Title>Ваш план</Title>
          <div style={{ width: 48 }} /> {/* Spacer for centering */}
        </Header>
        
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
      </Container>
    </Drawer>
  )
}
