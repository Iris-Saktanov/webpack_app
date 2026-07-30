import { App } from './components/App'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from '@/pages/about/index'
import { Shop } from '@/pages/shop/index'
import { Suspense } from 'react';

const root = createRoot(document.getElementById('root'))

let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading about...'}><About /></Suspense>,
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading shop...'}><Shop /></Suspense>,
            }
        ]
    },
]);

root.render(<RouterProvider router={router} />)