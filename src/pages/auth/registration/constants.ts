import { Gender } from './components/gender'
import { genderSchema, goalSchema } from './form.schema'
import { Goal } from './components/goal'

export const STEPS = [
	{
		component: Gender,
		schema: genderSchema,
		defaultValues: {
			gender: null
		}
	},
	{
		component: Goal,
		schema: goalSchema,
		defaultValues: {
			goal: null
		}
	}
]