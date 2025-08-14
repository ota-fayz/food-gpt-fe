export interface SettingsCardProps {
  icon: string
  title: string
  description: string
  enabled?: boolean
  showToggle?: boolean
  onClick?: () => void
  onToggle?: (enabled: boolean) => void
}
