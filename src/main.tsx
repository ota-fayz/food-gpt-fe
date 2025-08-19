import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { RouterProvider } from 'react-router-dom'

import { TelegramProvider } from './providers/TelegramProvider'
import { router } from './router'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TelegramProvider>
			<CssBaseline />
			<RouterProvider router={router} />
		</TelegramProvider>
	</StrictMode>
)
