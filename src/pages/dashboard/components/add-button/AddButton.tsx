import AddIcon from '@mui/icons-material/Add'
import type { AddButtonProps } from './types'
import { StyledFab } from './styles'

export const AddButtonIcon = (props: AddButtonProps) => (
  <StyledFab aria-label="add" {...props}>
    <AddIcon />
  </StyledFab>
)