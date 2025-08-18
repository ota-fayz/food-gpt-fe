import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { Input } from '../../../../components/input'
import { RadioGroup } from '../../../../components/radio'
import type { EditProps, ProfileFormData } from './types'
import { FIELD_CONFIG } from './constants'
import { 
  StyledDialog,
  StyledDialogTitle, 
  StyledDialogContent,
  StyledDialogActions,
  StyledForm,
  IconSpan
} from './styles'

export const Edit = ({ 
  open, 
  onClose, 
  field, 
  currentValue, 
  onSave 
}: EditProps) => {
  const fieldConfig = FIELD_CONFIG[field]
  
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

  const renderInput = () => {
    switch (fieldConfig.type) {
      case 'radio':
        return (
          <RadioGroup
            name="value"
            control={control}
            options={fieldConfig.options!}
            label={fieldConfig.label}
          />
        )
      case 'number':
      case 'text':
      default:
        return (
          <Input
            name="value"
            control={control}
            label={fieldConfig.label}
            type={fieldConfig.type === 'number' ? 'number' : 'text'}
            fullWidth
            variant="outlined"
            placeholder={fieldConfig.placeholder}
            helperText={fieldConfig.unit ? `💡 Указывается в ${fieldConfig.unit}` : undefined}
          />
        )
    }
  }

  return (
    <StyledDialog 
      open={open} 
      onClose={handleClose} 
      maxWidth="sm" 
      fullWidth
    >
      <StyledDialogTitle>
        {fieldConfig.icon && (
          <IconSpan>
            {fieldConfig.icon}
          </IconSpan>
        )}
        {fieldConfig.editTitle}
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      
      <StyledDialogContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {renderInput()}
        </StyledForm>
      </StyledDialogContent>
      
      <StyledDialogActions>
        <Button onClick={handleClose} variant="outlined" color="inherit">
          Отмена
        </Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Сохранить
        </Button>
      </StyledDialogActions>
    </StyledDialog>
  )
}