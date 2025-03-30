import type { FieldValues } from 'react-hook-form'
import type { IControl } from '../../types/components'
import type { TextFieldProps } from '@mui/material'

export type IInput<T extends FieldValues> = IControl<T> & TextFieldProps