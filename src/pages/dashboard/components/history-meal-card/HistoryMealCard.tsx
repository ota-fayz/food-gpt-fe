import Stack from '@mui/material/Stack'

import type { HistoryMealCardProps } from './types'
import { StyledCard, IconContainer, ContentContainer, Title, Calories, Subtitle, Time } from './styles'

export const HistoryMealCard = ({ iconUrl, title, calories, time, subtitle }: HistoryMealCardProps) => {
  return (
    <StyledCard>
      <IconContainer 
        style={iconUrl ? { backgroundImage: `url(${iconUrl})` } : {}}
      />
      
      <ContentContainer>
        <Stack spacing={0.5}>
          <Title>{title}</Title>
          <Calories>{calories} ккал</Calories>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Stack>
      </ContentContainer>
      
      <Time>{time}</Time>
    </StyledCard>
  )
}