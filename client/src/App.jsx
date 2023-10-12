import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import './app.scss'
import Error404 from './pages/Error404/Error404'

const Layout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/*',
                element: <Error404 />,
            },
        ],
    },
])

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
