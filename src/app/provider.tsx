'use client'

import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<NextUIProvider>
				{children}
				<ToastContainer
					position='top-left'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='dark'
				/>
			</NextUIProvider>
		</QueryClientProvider>
	)
}
