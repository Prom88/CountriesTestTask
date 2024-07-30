import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import CountrieDetail from './CountrieDetail'
import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <p>404 Not Found</p>,
	},
	{
		path: '/country/:id',
		element: <CountrieDetail />,
	},
	// {
	// 	path: '*',
	// 	element: <p>404 Not Found</p>,
	// },
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
