import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Pages/Home/Home";
import Quote from "../Components/Shared/Quote";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/supplier",
                element:<Quote></Quote>
            }
        ]
    }
])

export default routes;