export interface SettingsProps {
  icon: string
  title: string
  description: string
  enabled?: boolean
  showToggle?: boolean
  onClick?: () => void
  onToggle?: (enabled: boolean) => void
}
