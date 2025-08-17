import type { IRadioOption } from '../../../../components/radio/types'

type FieldType = 'text' | 'number' | 'radio'
type FieldKey = 'goal' | 'age' | 'weight' | 'height' | 'activity'

interface FieldConfig {
  label: string
  editTitle: string
  type: FieldType
  unit?: string
  placeholder?: string
  options?: IRadioOption[]
  icon?: string
}

export const ACTIVITY_OPTIONS: IRadioOption[] = [
  { value: 'Минимальная', label: 'Минимальная активность' },
  { value: 'Легкая', label: 'Легкая активность' },
  { value: 'Умеренная', label: 'Умеренная активность' },
  { value: 'Высокая', label: 'Высокая активность' },
  { value: 'Очень высокая', label: 'Очень высокая активность' }
]

export const FIELD_CONFIG: Record<FieldKey, FieldConfig> = {
  goal: {
    label: 'Ваша цель',
    editTitle: 'Редактировать цель',
    type: 'text',
    placeholder: 'Опишите вашу цель',
    icon: '🎯'
  },
  age: {
    label: 'Возраст',
    editTitle: 'Указать возраст',
    type: 'number',
    unit: 'лет',
    placeholder: 'Введите ваш возраст',
    icon: '🎂'
  },
  weight: {
    label: 'Вес',
    editTitle: 'Указать вес',
    type: 'number',
    unit: 'кг',
    placeholder: 'Введите ваш вес',
    icon: '⚖️'
  },
  height: {
    label: 'Рост',
    editTitle: 'Указать рост',
    type: 'number',
    unit: 'см',
    placeholder: 'Введите ваш рост',
    icon: '📏'
  },
  activity: {
    label: 'Активность',
    editTitle: 'Выбрать активность',
    type: 'radio',
    options: ACTIVITY_OPTIONS,
    icon: '🏃‍♂️'
  }
}

export type { FieldKey, FieldConfig }