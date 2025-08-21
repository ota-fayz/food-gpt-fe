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

export interface Profile {
	id: string
	telegramId: string
	firstName: string
	lastName?: string
	username?: string
	goal: string
	age: number
	weight: number
	height: number
	activity: string
	motivation: string
	targetWeight: number
	createdAt: string
	updatedAt: string
}

export interface RegistrationData {
	gender: 'MALE' | 'FEMALE'
	goal: 'LOSE' | 'MAINTAIN' | 'GAIN'
	age: number
	height: number
	weight: number
	motivation: 'ENERGY' | 'MOTIVATION' | 'CONFIDENCE' | 'EAT_BETTER'
	targetWeight: number
	activity: 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY_HIGH'
}

export interface RegistrationResponse {
	user: Profile
	token: string
}
