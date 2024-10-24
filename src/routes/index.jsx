import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import CreateYourDesign from "../pages/CreateYourDesign"

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
        }
    ]    
}
])

export default router