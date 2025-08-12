import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

interface HistoryMealCardProps {
  iconUrl?: string
  title: string
  calories: number
  time: string
  subtitle?: string
}

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
  border: '1px solid #E8E8E8',
}))

export const HistoryMealCard = ({ iconUrl, title, calories, time, subtitle }: HistoryMealCardProps) => {
  return (
    <StyledCard>
      <CardContent sx={{ p: 2 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar variant="rounded" src={iconUrl} sx={{ width: 56, height: 56 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
            <Typography variant="h6" fontWeight={600}>{calories} ккал</Typography>
            {subtitle && (
              <Typography variant="caption" color="text.secondary">{subtitle}</Typography>
            )}
          </Box>
          <Typography variant="caption" color="text.secondary">{time}</Typography>
        </Stack>
      </CardContent>
    </StyledCard>
  )
}

export default HistoryMealCard


