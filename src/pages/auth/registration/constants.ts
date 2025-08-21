import { Gender } from './components/gender'
import { Goal } from './components/goal'
import { Age } from './components/age'
import { Height } from './components/height'
import { Weight } from './components/weight'
import { Motivation } from './components/motivation'
import { Target } from './components/target'
import { Activity } from './components/activity'
import {
	ageSchema,
	genderSchema,
	goalSchema,
	heightSchema,
	weightSchema,
	motivationSchema,
	targetWeightSchema,
	activitySchema
} from './form.schema'

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
			age: null
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
			weight: null
		}
	},
	{
		component: Motivation,
		schema: motivationSchema,
		defaultValues: {
			motivation: null
		}
	},
	{
		component: Target,
		schema: targetWeightSchema,
		defaultValues: {
			targetWeight: null
		}
	},
	{
		component: Activity,
		schema: activitySchema,
		defaultValues: {
			activity: null
		}
	}
]