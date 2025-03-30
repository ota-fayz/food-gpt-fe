import type { Control, FieldValues, Path, UseControllerProps } from 'react-hook-form'

export interface IControl<T extends FieldValues> extends UseControllerProps<T> {
	name: Path<T>
	control: Control<T>
}