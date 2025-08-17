import type { NutritionPlan } from '../../../../../../types'

export interface EditProps {
  open: boolean
  onClose: () => void
  plan: NutritionPlan
  onSave?: (plan: NutritionPlan) => void
}
