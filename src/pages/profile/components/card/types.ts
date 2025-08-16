export interface CardProps {
  icon: string
  label: string
  value: string | number
  unit?: string
  onClick?: () => void
}
