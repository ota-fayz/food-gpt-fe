import type { FieldKey } from './constants'

export interface EditProps {
  open: boolean
  onClose: () => void
  field: FieldKey
  currentValue: string | number
  onSave: (value: string | number) => void
}

export interface ProfileFormData {
  value: string | number
}
