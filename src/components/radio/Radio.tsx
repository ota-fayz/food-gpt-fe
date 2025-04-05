import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import MuiRadioGroup from '@mui/material/RadioGroup'
import { useController, type FieldValues } from 'react-hook-form'

import type { IRadioGroup } from './types'

export const RadioGroup = <T extends FieldValues>({
													  name,
													  control,
													  options,
													  label,
													  ...props
												  }: IRadioGroup<T>) => {
	const {
		field: {value, ...fieldProps},
		fieldState: {error}
	} = useController({name, control})

	return (
		<FormControl component="fieldset" error={!!error}>
			{label && <FormLabel component="legend">{label}</FormLabel>}
			<MuiRadioGroup
				{...props}
				{...fieldProps}
				value={value ?? ''}
			>
				{options.map((option) => (
					<FormControlLabel
						key={option.value}
						value={option.value}
						control={<Radio />}
						label={option.label}
					/>
				))}
			</MuiRadioGroup>
			{error?.message && <FormHelperText>{error.message}</FormHelperText>}
		</FormControl>
	)
}