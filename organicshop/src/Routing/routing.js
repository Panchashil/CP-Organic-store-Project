import { createBrowserRouter } from "react-router-dom"
import LoginPageComp from "../Access/LoginPageComp";

const router = createBrowserRouter([

    {path:"Login",element:<LoginPageComp/>},
])
export default router;