import { Gender } from './components/gender'
import { ageSchema, genderSchema, goalSchema, heightSchema, weightSchema } from './form.schema'
import { Goal } from './components/goal'
import { Age } from './components/age'
import { Height } from './components/height'
import { Weight } from './components/weight'

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
	},
	{
		component: Height,
		schema: heightSchema,
		defaultValues: {
			height: null
		}
	},
	{
		component: Weight,
		schema: weightSchema,
		defaultValues: {
			height: null
		}
	}
]