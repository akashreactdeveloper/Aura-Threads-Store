import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import CreateYourDesign from "../pages/CreateYourDesign"
import Login from "../pages/Login"

const router = createBrowserRouter([
    {
    path : "/",
    element : <App/>,
    children : [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/createYourDesign",
            element : <CreateYourDesign/>
        },
        {
            path : "/login",
            element : <Login/>
        }
    ]    
}
])

export default router