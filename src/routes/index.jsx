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
import { isLogin } from "../utils/validations/authValidation";
console.log('isLogin', !isLogin());
const routes = createBrowserRouter([
    {
        path: ROUTE_PATH.SIGNUP,
        element: <PublicLayout><SignupPage /></PublicLayout>
    },
    {
        path: ROUTE_PATH.SIGIN,
        element: <PublicLayout>{!isLogin() ? <SigninPage /> : <PortfolioPage />}</PublicLayout>
    },
    {
        path: ROUTE_PATH.ADMINPORTAL,
        element: <PublicLayout><AdminPortal /></PublicLayout>
    },

    {
        path: ROUTE_PATH.HOME,
        element: <PublicLayout><Home /></PublicLayout>
    },
    {
        path: ROUTE_PATH.TODO,
        element: <TodoPage />
    },
    {
        path: ROUTE_PATH.ABOUT,
        element: <PublicLayout><AboutPage /></PublicLayout>

    },
    {
        path: ROUTE_PATH.RESUME,
        element: <PublicLayout><ResumePage /></PublicLayout>

    },
    {
        path: ROUTE_PATH.CONTACT,
        element: <PublicLayout><ContactPage /></PublicLayout>

    },
    {
        path: ROUTE_PATH.PORTFOLIO,
        element: <PublicLayout><PortfolioPage /></PublicLayout>

    },
])


export default routes;