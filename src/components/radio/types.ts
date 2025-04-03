import type { FieldValues } from 'react-hook-form'
import type { RadioGroupProps } from '@mui/material'

import type { IControl } from '../../types/components'

export interface IRadioOption {
	value: string
	label: string
}

export type IRadioGroup<T extends FieldValues> = IControl<T> & RadioGroupProps & {
	options: IRadioOption[]
	label?: string
}