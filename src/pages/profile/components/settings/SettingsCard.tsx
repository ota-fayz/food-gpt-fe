import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import type { SettingsProps } from './types'
import { Card, IconContainer, ContentContainer, Title, Description, StyledSwitch, ArrowIcon } from './styles'

export const Settings = ({ 
  icon, 
  title, 
  description, 
  enabled = false, 
  showToggle = false, 
  onClick, 
  onToggle 
}: SettingsProps) => {
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
