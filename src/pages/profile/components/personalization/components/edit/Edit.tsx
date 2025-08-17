import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'

import type { EditProps } from './types'
import type { NutritionPlan } from '../../../../../../types'
import { 
  StyledDrawer,
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
  MacroEditIcon,
  MacroInput,
  RecommendButton,
  RecommendationText
} from './styles'

export const Edit = ({ open, onClose, plan, onSave }: EditProps) => {
  const [editingPlan, setEditingPlan] = useState<NutritionPlan>(plan)
  const [editingMacro, setEditingMacro] = useState<string | null>(null)
  const [editingCalories, setEditingCalories] = useState(false)

  useEffect(() => {
    setEditingPlan(plan)
  }, [plan])

  const handleClose = () => {
    setEditingMacro(null)
    setEditingCalories(false)
    onClose()
  }

  const handleRecommendClick = () => {
    onSave?.(plan)
  }

  const handleMacroEdit = (macroLabel: string) => {
    setEditingMacro(macroLabel)
  }

  const handleMacroSave = (macroLabel: string, newValue: number) => {
    const updatedMacros = editingPlan.macros.map(macro => 
      macro.label === macroLabel ? { ...macro, value: newValue } : macro
    )
    const updatedPlan = { ...editingPlan, macros: updatedMacros }
    setEditingPlan(updatedPlan)
    setEditingMacro(null)
    onSave?.(updatedPlan)
  }

  const handleCaloriesEdit = () => {
    setEditingCalories(true)
  }

  const handleCaloriesSave = (newCalories: number) => {
    const updatedPlan = { ...editingPlan, calories: newCalories }
    setEditingPlan(updatedPlan)
    setEditingCalories(false)
    onSave?.(updatedPlan)
  }

  return (
    <StyledDrawer 
      anchor="bottom" 
      open={open} 
      onClose={handleClose}
    >
      <PlanContainer>
        <PlanHeader>
          <IconButton onClick={handleClose} size="large">
            <CloseIcon />
          </IconButton>
          <PlanTitle>Ваш план</PlanTitle>
          <IconButton sx={{ visibility: 'hidden' }} size="large" />
        </PlanHeader>
        
        <CalorieCard>
          <CalorieIcon>🔥</CalorieIcon>
          <CalorieContent>
            <CalorieLabel>Калорий</CalorieLabel>
            {editingCalories ? (
              <MacroInput
                type="number"
                defaultValue={editingPlan.calories}
                autoFocus
                onBlur={(e) => handleCaloriesSave(Number(e.target.value))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCaloriesSave(Number((e.target as HTMLInputElement).value))
                  }
                }}
              />
            ) : (
              <CalorieValue>{editingPlan.calories}</CalorieValue>
            )}
          </CalorieContent>
          <MacroEditIcon onClick={handleCaloriesEdit}>
            <EditIcon fontSize="small" />
          </MacroEditIcon>
        </CalorieCard>

        <MacroGrid>
          {editingPlan.macros.map((macro) => (
            <MacroCard key={macro.label}>
              <MacroIcon style={{ backgroundColor: `${macro.color}20` }}>
                {macro.icon}
              </MacroIcon>
              <MacroLabel>{macro.label}</MacroLabel>
              {editingMacro === macro.label ? (
                <MacroInput
                  type="number"
                  defaultValue={macro.value}
                  autoFocus
                  onBlur={(e) => handleMacroSave(macro.label, Number(e.target.value))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleMacroSave(macro.label, Number((e.target as HTMLInputElement).value))
                    }
                  }}
                />
              ) : (
                <MacroValue>{macro.value}{macro.unit}</MacroValue>
              )}
              <MacroEditIcon onClick={() => handleMacroEdit(macro.label)}>
                <EditIcon fontSize="small" />
              </MacroEditIcon>
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
    </StyledDrawer>
  )
}
