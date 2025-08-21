import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { RouterProvider } from 'react-router-dom'

import { TelegramProvider } from './providers/TelegramProvider'
import { QueryProvider } from './providers/QueryProvider'
import { router } from './router'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TelegramProvider>
			<QueryProvider>
				<CssBaseline />
				<RouterProvider router={router} />
			</QueryProvider>
		</TelegramProvider>
	</StrictMode>
)
