import { createBrowserRouter } from "react-router-dom"
import MySliderComp from "../components/MySliderComp"
import MyImagesComp from "../components/MyImages";
import ParentComp from "../components/ParentComp";
import PageNotFound from "../components/PageNotFound";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHookComp from "../Hooks/UseStateHookComp";
import UseEffectHookComp from "../Hooks/UseEffectHookComp";
import MaindashboardComp from "../Layout/MaindashboardComp";
import NavComp from "../Layout/NavComp";
import VirtualDomComp from "../components/VirtualDomComp";
import FormValComp from "../components/FormValComp";
import ProductDashboardComp from "../CRUD/ProductDashboardComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductUpdateComp from "../CRUD/ProductUpdateComp";
import LoginPage from "../Layout/LoginPage";
import SignOut from "../Layout/Signout";
import ProtectedRoutingComp from "./ProtectedRoutingComp";
import RegisterPageComp from "../Layout/RegisterPageComp";


const router = createBrowserRouter([
    {path:"",element:<LoginPage/>},
    {path:"Login",element:<LoginPage/>},
    {path:"Register",element:<RegisterPageComp/>},
    {path:"SignOut",element:<SignOut/>},
    {path:"SignOut/:id",element:<LoginPage/>},
    {path:"Maindashboard",
        // element:<MaindashboardComp/>
        element:<ProtectedRoutingComp Component={MaindashboardComp}/>,children:[
        {path:"nav",element:<NavComp/>},
        // {path:"Copyright",element:</>},
        {path:"",element:<MySliderComp/>},
        {path:"myslider",element:<MySliderComp/>},
        {path:"ProductDashboard",element:<ProductDashboardComp/>},
        {path:"ProductUpdate/:id",element:<ProductUpdateComp/>},
        {path:"ProductAdd",element:<ProductAddComp/>},
        {path:"SignOut",element:<SignOut/>},
        {path:"myimages",element:<MyImagesComp/>},
        {path:"parent/:id",element:<ParentComp/>},
        {path:"parent",element:<ParentComp/>},
        {path:"FormValComp",element:<FormValComp/>},
        {path:"VirtualDom",element:<VirtualDomComp/>},
        {path:"UseState",element:<UseStateHookComp/>},
        {path:"ReactHooks",element:<ReactHooksComp />,children:[
            {path:"UseState",element:<UseStateHookComp/>},
            {path:"UseEffect",element:<UseEffectHookComp/>},
        ]},
    ]},
    
 
    {path:"*",element:<PageNotFound/>},

])


export default router;

