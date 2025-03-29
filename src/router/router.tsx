import { createBrowserRouter } from 'react-router-dom'

import { ROUTER } from '../constants/router.ts'
import Welcome from '../pages/auth/welcome'
import Registration from '../pages/auth/registration'

export const router = createBrowserRouter([
	{
		path: ROUTER.WELCOME,
		element: <Welcome />
	},
	{
		path: ROUTER.REGISTRATION,
		element: <Registration />
	}
])