import type { NutritionPlan } from '../../../../types'

export interface PlanSheetProps {
  open: boolean
  onClose: () => void
  plan: NutritionPlan
  onSave?: (plan: NutritionPlan) => void
}
