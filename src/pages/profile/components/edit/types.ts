export interface EditProps {
  open: boolean
  onClose: () => void
  field: 'goal' | 'age' | 'weight' | 'height' | 'activity'
  currentValue: string | number
  onSave: (value: string | number) => void
}

export interface ProfileFormData {
  value: string | number
}
