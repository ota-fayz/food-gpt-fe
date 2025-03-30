import { Gender } from './components/gender'
import { ageSchema, genderSchema, goalSchema } from './form.schema'
import { Goal } from './components/goal'
import { Age } from './components/age'

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
	},
	{
		component: Age,
		schema: ageSchema,
		defaultValues: {
			goal: null
		}
	}
]