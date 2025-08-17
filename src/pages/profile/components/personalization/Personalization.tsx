import { useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import type { PersonalizationProps } from './types'
import type { NutritionPlan } from '../../../../types'
import { Edit } from './components/edit'
import { 
  SectionTitle, 
  Card, 
  IconContainer, 
  ContentContainer, 
  Title, 
  Description, 
  ArrowIcon
} from './styles'

export const Personalization = ({ plan, onPlanSave }: PersonalizationProps) => {
  const [isPlanOpen, setIsPlanOpen] = useState(false)

  const handlePlanClick = () => {
    setIsPlanOpen(true)
  }

  const handlePlanClose = () => {
    setIsPlanOpen(false)
  }

  const handlePlanSave = (updatedPlan: NutritionPlan) => {
    onPlanSave?.(updatedPlan)
    setIsPlanOpen(false)
  }

  return (
    <>
      <SectionTitle>Персонализация</SectionTitle>
      <Card onClick={handlePlanClick}>
        <IconContainer>
          📊
        </IconContainer>
        
        <ContentContainer>
          <Title>Ваш план</Title>
          <Description>Управляйте дневным количеством КБЖУ и калорий</Description>
        </ContentContainer>
        
        <ArrowIcon>
          <ChevronRightIcon fontSize="small" />
        </ArrowIcon>
      </Card>

      {plan && (
        <Edit
          open={isPlanOpen}
          onClose={handlePlanClose}
          plan={plan}
          onSave={handlePlanSave}
        />
      )}
    </>
  )
}