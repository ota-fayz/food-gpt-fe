import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import { ROUTER } from '../constants/router.ts'

const Welcome = lazy(async () => await import('../pages/auth/welcome'))
const Registration = lazy(async () => await import('../pages/auth/registration'))
const Dashboard = lazy(async () => await import('../pages/dashboard'))

export const router = createBrowserRouter([
	{
		path: ROUTER.REGISTRATION,
		element: <Registration />
	},
	{
		path: ROUTER.WELCOME,
		element: <Welcome />
	},
	{
		path: ROUTER.DASHBOARD,
		element: <Dashboard />
	}
])