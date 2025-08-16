import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import type { CardProps } from './types'
import { Card as StyledCard, IconContainer, ContentContainer, Label, ValueContainer, Value, ArrowIcon } from './styles'

export const Card = ({ icon, label, value, unit, onClick }: CardProps) => {
  return (
    <StyledCard onClick={onClick}>
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
    </StyledCard>
  )
}
