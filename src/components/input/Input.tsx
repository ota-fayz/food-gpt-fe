import TextField from '@mui/material/TextField'
import { type FieldValues, useController } from 'react-hook-form'
import type { IInput } from './types'

export const Input = <T extends FieldValues>({name, control, ...props}: IInput<T>) => {
	const {
		field: {value, ...fieldProps},
		fieldState: {invalid, error}
	} = useController({
		name,
		control
	})

	return (
		<TextField
			{...props}
			{...fieldProps}
			error={invalid}
			value={value ?? ''}
			helperText={error?.message}
		/>
	)
}