import type { NutritionPlan } from '../../../../types'

export interface PersonalizationProps {
  plan?: NutritionPlan
  onPlanSave?: (plan: NutritionPlan) => void
}
