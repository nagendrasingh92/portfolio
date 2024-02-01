import { useRouteError, isRouteErrorResponse } from "react-router";
import { useEffect } from "react";
import { useNavigate } from "react-router";
const ErrorPage = () => {
    const navigate = useNavigate();

    const error = useRouteError();

    const getMessage = () => {
        if (isRouteErrorResponse(error)) {
            return <i>{error?.statusText}</i>;
        } else if (error instanceof Error) {
            return <i>{error?.message}</i>;
        }
        return <i>{'Unknown Error'}</i>;
    };
    useEffect(() => {
        const delayRedirect = setTimeout(() => {
            // Redirect to the About page after 3000 milliseconds (3 seconds)
            navigate('/');
        }, 3000);

        return () => clearTimeout(delayRedirect); // Clear the timeout on component unmount

    }, [navigate]);

    return (
        <div id="error-page">
            <h1>Hi, check the error below</h1>
            <p>
                <i>
                    {
                        "Wrong URL"
                    }
                    {getMessage()}
                </i>
            </p>
        </div>
    )
}

export default ErrorPage;