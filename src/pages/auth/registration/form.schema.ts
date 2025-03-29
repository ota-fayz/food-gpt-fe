import { z, type ZodType } from 'zod'

export type GenderFormTypes = {
	gender: 'MALE' | 'FEMALE'
}

export type GoalFormTypes = {
	goal: 'LOSE' | 'MAINTAIN' | 'GAIN'
}

export const genderSchema: ZodType<GenderFormTypes> = z.object({
	gender: z.enum(['MALE', 'FEMALE'])
})

export const goalSchema: ZodType<GoalFormTypes> = z.object({
	goal: z.enum(['LOSE', 'MAINTAIN', 'GAIN'])
})

export type FormTypes = GenderFormTypes | GoalFormTypes