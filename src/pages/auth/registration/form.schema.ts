import { z, type ZodType } from 'zod'

type GenderFormTypes = {
	gender: 'MALE' | 'FEMALE'
}

type GoalFormTypes = {
	goal: 'LOSE' | 'MAINTAIN' | 'GAIN'
}

type AgeFormTypes = {
	age: number
}

type HeightFormTypes = {
	age: number
}

type WeightFormTypes = {
	age: number
}

export const genderSchema: ZodType<GenderFormTypes> = z.object({
	gender: z.enum(['MALE', 'FEMALE'])
})

export const goalSchema: ZodType<GoalFormTypes> = z.object({
	goal: z.enum(['LOSE', 'MAINTAIN', 'GAIN'])
})

export const ageSchema = z.object({
	age: z.preprocess((val) => Number(val), z.number().int().min(1).max(999))
})

export const heightSchema = z.object({
	height: z.preprocess((val) => Number(val), z.number().int().min(1).max(999))
})

export const weightSchema = z.object({
	weight: z
		.preprocess((val) => Number(val), z.number().min(1).max(999))
})

export type FormTypes = GenderFormTypes | GoalFormTypes | AgeFormTypes | HeightFormTypes | WeightFormTypes