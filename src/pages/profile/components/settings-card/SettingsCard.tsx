import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import type { SettingsCardProps } from './types'
import { Card, IconContainer, ContentContainer, Title, Description, StyledSwitch, ArrowIcon } from './styles'

export const SettingsCard = ({ 
  icon, 
  title, 
  description, 
  enabled = false, 
  showToggle = false, 
  onClick, 
  onToggle 
}: SettingsCardProps) => {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation()
    onToggle?.(event.target.checked)
  }

  return (
    <Card onClick={onClick}>
      <IconContainer>
        {icon}
      </IconContainer>
      
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentContainer>
      
      {showToggle ? (
        <StyledSwitch
          checked={enabled}
          onChange={handleToggle}
        />
      ) : (
        onClick && (
          <ArrowIcon>
            <ChevronRightIcon fontSize="small" />
          </ArrowIcon>
        )
      )}
    </Card>
  )
}
