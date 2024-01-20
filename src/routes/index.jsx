import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATH } from '../constants/route';
import Home from "../pages/Home/index";
import TodoPage from '../pages/TodoPage/index';
import PublicLayout from "../layout/PublicLayout";
import AboutPage from "../pages/AboutPage";
import ResumePage from "../pages/ResumePage";


const routes = createBrowserRouter([
    {
        path: ROUTE_PATH.HOME,
        element:<PublicLayout><Home /></PublicLayout> 
    },
    {
        path: ROUTE_PATH.TODO_PAGE,
        element: <TodoPage />
    },
    {
        path: ROUTE_PATH.ABOUT_PAGE,
        element:<PublicLayout><AboutPage /></PublicLayout> 

    },
    {
        path: ROUTE_PATH.RESUME_PAGE,
        element:<PublicLayout><ResumePage /></PublicLayout> 

    },
])


export default routes;