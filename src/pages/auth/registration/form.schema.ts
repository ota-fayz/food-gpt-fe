import { z } from 'zod'

export const genderSchema = z.object({
	gender: z.enum(['MALE', 'FEMALE'])
})

export const goalSchema = z.object({
	goal: z.enum(['LOSE', 'MAINTAIN', 'GAIN'])
})

export const ageSchema = z.object({
	age: z.preprocess(val => Number(val), z.number().int().min(1).max(999))
})

export const heightSchema = z.object({
	height: z.preprocess(val => Number(val), z.number().int().min(1).max(999))
})

export const weightSchema = z.object({
	weight: z.preprocess(val => Number(val), z.number().min(1).max(999))
})

export const motivationSchema = z.object({
	motivation: z.enum(['ENERGY', 'MOTIVATION', 'CONFIDENCE', 'EAT_BETTER'])
})

export const targetWeightSchema = z.object({
	targetWeight: z.preprocess(val => Number(val), z.number().min(1).max(999))
})

export const hasChildrenSchema = z.object({
	hasChildren: z.enum(['YES', 'NO'])
})

export const dietSchema = z.object({
	diet: z.enum(['NONE', 'PESCETARIAN', 'VEGETARIAN', 'VEGAN'])
})

export const activitySchema = z.object({
	activity: z.enum(['LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH'])
})

export const trackingDurationSchema = z.object({
	trackingDuration: z.enum(['50', '30', '14', '7'])
})

export type GenderFormTypes = z.infer<typeof genderSchema>
export type GoalFormTypes = z.infer<typeof goalSchema>
export type AgeFormTypes = z.infer<typeof ageSchema>
export type HeightFormTypes = z.infer<typeof heightSchema>
export type WeightFormTypes = z.infer<typeof weightSchema>
export type MotivationFormTypes = z.infer<typeof motivationSchema>
export type TargetWeightFormTypes = z.infer<typeof targetWeightSchema>
export type HasChildrenFormTypes = z.infer<typeof hasChildrenSchema>
export type DietFormTypes = z.infer<typeof dietSchema>
export type ActivityFormTypes = z.infer<typeof activitySchema>
export type TrackingDurationFormTypes = z.infer<typeof trackingDurationSchema>

export type FormTypes =
	| GenderFormTypes
	| GoalFormTypes
	| AgeFormTypes
	| HeightFormTypes
	| WeightFormTypes
	| MotivationFormTypes
	| TargetWeightFormTypes
	| HasChildrenFormTypes
	| DietFormTypes
	| ActivityFormTypes
	| TrackingDurationFormTypes