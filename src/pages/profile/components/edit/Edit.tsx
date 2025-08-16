import { useForm } from 'react-hook-form'
import Dialog from '@mui/material/Dialog'

import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { Input } from '../../../../components/input'
import { RadioGroup } from '../../../../components/radio'
import type { EditProps, ProfileFormData } from './types'
import { ACTIVITY_OPTIONS } from './constants'
import { StyledDialogTitle, StyledForm } from './styles'

export const Edit = ({ 
  open, 
  onClose, 
  field, 
  currentValue, 
  onSave 
}: EditProps) => {
  const { control, handleSubmit, reset } = useForm<ProfileFormData>({
    defaultValues: {
      value: currentValue || ''
    }
  })

  const handleClose = () => {
    reset()
    onClose()
  }

  const onSubmit = (data: ProfileFormData) => {
    onSave(data.value)
    handleClose()
  }

  const getFieldLabel = () => {
    switch (field) {
      case 'goal': return 'Ваша цель'
      case 'age': return 'Возраст'
      case 'weight': return 'Вес'
      case 'height': return 'Рост'
      case 'activity': return 'Активность'
      default: return 'Значение'
    }
  }

  const getInputType = () => {
    return ['age', 'weight', 'height'].includes(field) ? 'number' : 'text'
  }

  const getUnit = () => {
    switch (field) {
      case 'age': return 'лет'
      case 'weight': return 'кг'
      case 'height': return 'см'
      default: return ''
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <StyledDialogTitle>
        Редактировать {getFieldLabel().toLowerCase()}
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      
      <DialogContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {field === 'activity' ? (
            <RadioGroup
              name="value"
              control={control}
              options={ACTIVITY_OPTIONS}
              label={getFieldLabel()}
            />
          ) : (
            <Input
              name="value"
              control={control}
              label={getFieldLabel()}
              type={getInputType()}
              fullWidth
              variant="outlined"
              placeholder={`Введите ${getFieldLabel().toLowerCase()}`}
              helperText={getUnit() && `Указывается в ${getUnit()}`}
            />
          )}
        </StyledForm>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Отмена
        </Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  )
}
