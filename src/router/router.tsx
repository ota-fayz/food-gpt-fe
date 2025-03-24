import { createBrowserRouter } from 'react-router-dom'

import { ROUTER } from '../constants/router.ts'
import Welcome from '../pages/auth/welcome'

export const router = createBrowserRouter([
	{
		path: ROUTER.WELCOME,
		element: <Welcome />
	}
])