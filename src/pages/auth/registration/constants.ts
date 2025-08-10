import { Gender } from './components/gender'
import { Goal } from './components/goal'
import { Age } from './components/age'
import { Height } from './components/height'
import { Weight } from './components/weight'
import { Motivation } from './components/motivation'
import { TargetWeight } from './components/target-weight'
import { HasChildren } from './components/has-children'
import { Diet } from './components/diet'
import { Activity } from './components/activity'
import { TrackingDuration } from './components/tracking-duration'
import {
	ageSchema,
	genderSchema,
	goalSchema,
	heightSchema,
	weightSchema,
	motivationSchema,
	targetWeightSchema,
	hasChildrenSchema,
	dietSchema,
	activitySchema,
	trackingDurationSchema
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
		component: TargetWeight,
		schema: targetWeightSchema,
		defaultValues: {
			targetWeight: null
		}
	},
	{
		component: HasChildren,
		schema: hasChildrenSchema,
		defaultValues: {
			hasChildren: null
		}
	},
	{
		component: Diet,
		schema: dietSchema,
		defaultValues: {
			diet: null
		}
	},
	{
		component: Activity,
		schema: activitySchema,
		defaultValues: {
			activity: null
		}
	},
	{
		component: TrackingDuration,
		schema: trackingDurationSchema,
		defaultValues: {
			trackingDuration: null
		}
	}
]