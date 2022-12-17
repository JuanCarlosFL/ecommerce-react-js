import { createBrowserRouter } from "react-router-dom";
import { App } from "../components/templates/App";
import { Error404 } from "../components/pages/Error404";
import { Products } from "../components/pages/Products";
import { Home } from "../components/pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            }
        ]
    }
])


export default router;