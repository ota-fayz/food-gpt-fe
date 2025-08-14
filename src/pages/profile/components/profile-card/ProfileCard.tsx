import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import type { ProfileCardProps } from './types'
import { Card, IconContainer, ContentContainer, Label, ValueContainer, Value, ArrowIcon } from './styles'

export const ProfileCard = ({ icon, label, value, unit, onClick }: ProfileCardProps) => {
  return (
    <Card onClick={onClick}>
      <IconContainer>
        {icon}
      </IconContainer>
      
      <ContentContainer>
        <Label>{label}</Label>
      </ContentContainer>
      
      <ValueContainer>
        <Value>
          {value}{unit && ` ${unit}`}
        </Value>
        {onClick && (
          <ArrowIcon>
            <ChevronRightIcon fontSize="small" />
          </ArrowIcon>
        )}
      </ValueContainer>
    </Card>
  )
}
