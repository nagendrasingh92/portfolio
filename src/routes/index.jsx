import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATH } from '../constants/route';
import Home from "../pages/Home";


const routes = createBrowserRouter([
    {
        path: ROUTE_PATH.HOME,
        element: <Home />
    },
])


export default routes;