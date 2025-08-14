export interface UserProfile {
  goal: string
  age: number
  weight: number
  height: number
  activity: string
}

export interface MacroNutrient {
  label: string
  value: number
  unit: string
  color: string
  icon: string
}

export interface NutritionPlan {
  calories: number
  macros: MacroNutrient[]
}

export interface PersonalizationSetting {
  id: string
  title: string
  description: string
  icon: string
  enabled: boolean
}

export type ProfileSection = 'personal' | 'plan' | 'settings'
