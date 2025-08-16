import type { UserProfile, NutritionPlan } from '../../types'

export const MOCK_USER_PROFILE: UserProfile = {
  goal: '79 кг',
  age: 30,
  weight: 80,
  height: 170,
  activity: 'Легкая'
}

export const MOCK_NUTRITION_PLAN: NutritionPlan = {
  calories: 2146,
  macros: [
    {
      label: 'Белки',
      value: 134,
      unit: 'г',
      color: '#FF6B6B',
      icon: '🥩'
    },
    {
      label: 'Жиры', 
      value: 72,
      unit: 'г',
      color: '#4ECDC4',
      icon: '🥑'
    },
    {
      label: 'Углеводы',
      value: 242,
      unit: 'г', 
      color: '#45B7D1',
      icon: '🍞'
    }
  ]
}



export const PROFILE_ICONS = {
  goal: '🎯',
  age: '📅', 
  weight: '⚖️',
  height: '📏',
  activity: '🚴'
}
