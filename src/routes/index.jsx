import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATH } from '../constants/route';
import Home from "../pages/Home/index";
import TodoPage from '../pages/TodoPage/index.jsx';
import PublicLayout from "../layout/PublicLayout";
import AboutPage from "../pages/AboutPage";
import ResumePage from "../pages/ResumePage";
import ContactPage from "../pages/ContactPage";
import PortfolioPage from '../pages/PortfolioPage';
import SigninPage from "../pages/SigninPage";
import SignupPage from '../pages/SignupPage';
import AdminPortal from "../pages/AdminPortal";
import ErrorPage from "../pages/404";
import TodoList from "../pages/TodoList";
import ProtectedRoute from "./middleware/ProtectedRoute";
import PublicRoute from "./middleware/PublicRoute";
const routes = createBrowserRouter([
    {
        path: '*',
        element: <ErrorPage />
    },
    {
        path: ROUTE_PATH.SIGNUP,
        element: (
            <PublicRoute>
                <PublicLayout>
                    <SignupPage />
                </PublicLayout>
            </PublicRoute>
        )
    },
    {
        path: ROUTE_PATH.SIGIN,
        element: (
            <PublicRoute>
                <PublicLayout>
                    <SigninPage />
                </PublicLayout>
            </PublicRoute>
        )
    },
    {
        path: ROUTE_PATH.ADMINPORTAL,
        element: (
            <ProtectedRoute>
                <PublicLayout>
                    <AdminPortal />
                </PublicLayout>
            </ProtectedRoute>
        )
    },

    {
        path: ROUTE_PATH.HOME,
        element: <PublicLayout>

            <Home /></PublicLayout>
    },
    {
        path: ROUTE_PATH.TODO,
        element: <TodoPage />
    },
    {
        path: ROUTE_PATH.ABOUT,
        element: (
            <PublicLayout>
                <AboutPage />
            </PublicLayout>
        )
    },
    {
        path: ROUTE_PATH.RESUME,
        element: <PublicLayout><ResumePage /></PublicLayout>

    },
    {

        path: ROUTE_PATH.CONTACT,
        element: (
            <ProtectedRoute>
                <PublicLayout>
                    <ContactPage />
                </PublicLayout>
            </ProtectedRoute>
        )
    },
    {
        path: ROUTE_PATH.PORTFOLIO,
        element: <PublicLayout><PortfolioPage /></PublicLayout>

    },
    {
        path: ROUTE_PATH.TODOLIST,
        element: (
            <ProtectedRoute>
                <PublicLayout>
                    <TodoList />
                </PublicLayout>
            </ProtectedRoute>
        )
    },
])


export default routes;