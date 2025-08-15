import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import EditIcon from '@mui/icons-material/Edit'

import type { AddOption } from './types'
import {
  StyledFab,
  StyledDrawer,
  SheetContent,
  Header,
  OptionItem,
  IconContainer,
  OptionText,
} from './styles'

const OPTIONS: AddOption[] = [
  { id: 'camera', label: 'Камера', icon: CameraAltIcon },
  { id: 'gallery', label: 'Фотогалерея', icon: PhotoLibraryIcon },
  { id: 'manual', label: 'Описать вручную', icon: EditIcon },
]

export const Add = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (optionId: string) => {
    console.log(`Selected option: ${optionId}`)
    setIsOpen(false)
  }

  return (
    <>
      <StyledFab aria-label="add" onClick={() => setIsOpen(true)}>
        <AddIcon />
      </StyledFab>

      <StyledDrawer anchor="bottom" open={isOpen} onClose={() => setIsOpen(false)}>
        <SheetContent>
          <Header>
            <IconButton onClick={() => setIsOpen(false)} size="medium">
              <CloseIcon />
            </IconButton>
          </Header>
          
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
        </SheetContent>
      </StyledDrawer>
    </>
  )
}
