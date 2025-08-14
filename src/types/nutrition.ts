export interface MacroData {
  label: string;
  current: number;
  target: number;
  color: string;
}

export interface MacroInfo extends MacroData {
  percentage: number;
  unit: string;
}

export interface MealEntry {
  id: string;
  title: string;
  calories: number;
  time: string;
  subtitle?: string;
  iconUrl?: string;
  macros?: {
    protein: number;
    fat: number;
    carbs: number;
  };
}

export interface DailyNutrition {
  date: string;
  totalCalories: number;
  remainingCalories: number;
  macros: MacroData[];
  meals: MealEntry[];
}
