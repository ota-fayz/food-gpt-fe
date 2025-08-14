export interface AddSheetProps {
  open: boolean
  onClose: () => void
}

export interface AddOption {
  id: string
  label: string
  icon: React.ComponentType
}
