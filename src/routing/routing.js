import { createBrowserRouter } from "react-router-dom"
import MySliderComp from "../components/MySliderComp"
import MyImagesComp from "../components/MyImages";

import PageNotFound from "../components/PageNotFound";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHookComp from "../Hooks/UseStateHookComp";
import UseEffectHookComp from "../Hooks/UseEffectHookComp";
import MaindashboardComp from "../Layout/MaindashboardComp";
import NavComp from "../Layout/NavComp";
import VirtualDomComp from "../components/VirtualDomComp";
import FormValComp from "../components/FormValComp";
import ProductDashboardComp from "../CRUD/ProductDashboardComp";
// import ProductAddComp from "../CRUD/ProductAddComp";
import ProductUpdateComp from "../CRUD/ProductUpdateComp";
import LoginPage from "../Layout/LoginPage";
// import SignOutComp from "../Layout/Signout";
import ProtectedRoutingComp from "./ProtectedRoutingComp";
import RegisterPageComp from "../Layout/RegisterPageComp";
//import LogoutPageComp from "../Layout/LogoutPageComp";
// import ProductUserComp from "../CRUD/ProductDashUser";
import CardComp from "../List/OilPageComp";
import PulsesPageComp from "../List/PulsesPageComp";
import VegetablesComp from "../List/VegetablesComp";
import FuritsPageComp from "../List/FruitsPageComp";
import DairyPageComp from "../List/DairyPageComp";
import AdminPageComp from "../List/AdminPageComp";
import DashboardPageComp from "../Layout/DashboardPageComp";
import ContactPageComp from "../Layout/ContactPageComp";
import AboutPageComp from "../Layout/AboutPageComp";
import BestofusPageComp from "../List/BestOfUsPageComp";
import AdminAddComp from "../CRUD/AdminAddcomp";
import CartPageComp from "../List/CartPageComp";
import ManageUsersComp from "../CRUD/ManageUsersComp";
// import AdminUpdateComp from "../CRUD/AdminUpdateComp";


const router = createBrowserRouter([
    { path: "", element: <DashboardPageComp /> },
    
    { path: "Login", element: <LoginPage /> },
    { path: "Register", element: <RegisterPageComp /> },
    // { path: "Logout", element: <LogoutPageComp /> },
    // {path:"ProductDashboard",element:<ProductDashboardComp/>},
    { path: "ContactPage", element: <ContactPageComp /> },
    { path: "AboutPage", element: <AboutPageComp /> },
    { path: "BestofusPage", element: <BestofusPageComp /> },
    // {path:"ProductUpdate/:id",element:<ProductUpdateComp/>},
    { path: "AdminAdd", element: <AdminAddComp /> },

    {
        path: "Maindashboard",
        element: <ProtectedRoutingComp Component={MaindashboardComp} />, children: [
            { path: "", element: <AdminPageComp /> },
            { path: "nav", element: <NavComp /> },
            { path: "Oil", element: <CardComp /> },
            { path: "Pulses", element: <PulsesPageComp /> },
            { path: "Vegetables", element: <VegetablesComp /> },
            { path: "Furits", element: <FuritsPageComp /> },
            { path: "Dairy", element: <DairyPageComp /> },
            { path: "myslider", element: <MySliderComp /> },
            { path: "ProductDashboard", element: <ProductDashboardComp /> },
            { path: "ProductUpdate/:id", element: <ProductUpdateComp /> },
            { path: "ManageUser", element: <ManageUsersComp /> },
            { path: "AdminAdd", element: <AdminAddComp /> },
            { path: "myimages", element: <MyImagesComp /> },
            { path: "FormValComp", element: <FormValComp /> },
            { path: "VirtualDom", element: <VirtualDomComp /> },
            { path: "UseState", element: <UseStateHookComp /> },
            {
                path: "ReactHooks", element: <ReactHooksComp />, children: [
                    { path: "UseState", element: <UseStateHookComp /> },
                    { path: "UseEffect", element: <UseEffectHookComp /> },
                ]
            },
        ]
    },
    {
        path: "ProductUser",  element: <ProtectedRoutingComp Component={MaindashboardComp} />
        , children: [
            { path: "", element: <VegetablesComp /> },
            { path: "nav", element: <NavComp /> },
            // {path:"Copyright",element:</>},

            { path: "myslider", element: <MySliderComp /> },
            { path: "myimages", element: <MyImagesComp /> },
            { path: "Vegetables", element: <VegetablesComp /> },
            { path: "Pulses", element: <PulsesPageComp /> },
            { path: "Furits", element: <FuritsPageComp /> },
            { path: "Dairy", element: <DairyPageComp /> },
            { path: "FormValComp", element: <FormValComp /> },
            { path: "VirtualDom", element: <VirtualDomComp /> },
            { path: "Oil", element: <CardComp /> },
            { path: "UseState", element: <UseStateHookComp /> },
            { path: "cart", element: <CartPageComp /> },
            {
                path: "ReactHooks", element: <ReactHooksComp />, children: [
                    { path: "UseState", element: <UseStateHookComp /> },
                    { path: "UseEffect", element: <UseEffectHookComp /> },
                ]
            },
        ]
    },


    { path: "*", element: <PageNotFound /> },

])


export default router;

