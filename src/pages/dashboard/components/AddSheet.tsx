import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

interface AddSheetProps {
  open: boolean
  onClose: () => void
}

export const AddSheet = ({ open, onClose }: AddSheetProps) => {
  return (
    <Drawer anchor="bottom" open={open} onClose={onClose} PaperProps={{ sx: { borderTopLeftRadius: 16, borderTopRightRadius: 16 } }}>
      <Stack spacing={2} sx={{ p: 2 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Добавить</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        {/* Placeholder content based on design. Fill with actions in next iteration. */}
        <Typography variant="body2" color="text.secondary">Выберите действие: Скан блюда, Ввести вручную и т.д.</Typography>
      </Stack>
    </Drawer>
  )
}

export default AddSheet


