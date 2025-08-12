import Fab, { type FabProps } from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { styled } from '@mui/material/styles'

export const AddButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(8),
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#000',
  color: '#fff',
  width: 72,
  height: 40,
  borderRadius: 999,
  boxShadow: '0 4px 20px rgba(0,0,0,0.25)'
}))

export const AddButtonIcon = (props: FabProps) => (
  <AddButton aria-label="add" {...props}>
    <AddIcon />
  </AddButton>
)

export default AddButton


