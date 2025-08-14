import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import CloseIcon from '@mui/icons-material/Close'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import EditIcon from '@mui/icons-material/Edit'
import FavoriteIcon from '@mui/icons-material/Favorite'

import type { AddSheetProps, AddOption } from './types'
import { Container, Header, OptionItem, IconContainer, OptionText } from './styles'

const OPTIONS: AddOption[] = [
  { id: 'camera', label: 'Камера', icon: CameraAltIcon },
  { id: 'gallery', label: 'Фотогалерея', icon: PhotoLibraryIcon },
  { id: 'manual', label: 'Описать вручную', icon: EditIcon },
  { id: 'favorites', label: 'Избранное', icon: FavoriteIcon }
]

export const AddSheet = ({ open, onClose }: AddSheetProps) => {
  const handleOptionClick = (optionId: string) => {
    console.log(`Selected option: ${optionId}`)
    onClose()
  }

  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      <Container>
        <Header>
          <IconButton onClick={onClose} size="large">
            <CloseIcon />
          </IconButton>
        </Header>
        
        <Stack>
          {OPTIONS.map((option) => {
            const Icon = option.icon
            return (
              <OptionItem 
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
              >
                <IconContainer>
                  <Icon />
                </IconContainer>
                <OptionText>
                  {option.label}
                </OptionText>
              </OptionItem>
            )
          })}
        </Stack>
      </Container>
    </Drawer>
  )
}