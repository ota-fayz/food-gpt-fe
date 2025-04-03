import type { FieldValues } from 'react-hook-form'
import type { TextFieldProps } from '@mui/material'

import type { IControl } from '../../types/components'

export type IInput<T extends FieldValues> = IControl<T> & TextFieldProps