import type { NutritionPlan } from '../../../../types'

export interface PersonalizationProps {
  plan?: NutritionPlan
  onPlanSave?: (plan: NutritionPlan) => void
}

export interface PlanDrawerProps {
  open: boolean
  onClose: () => void
  plan: NutritionPlan
  onSave?: (plan: NutritionPlan) => void
}
