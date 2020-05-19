import Listing from "../Components/Shopping/Listing";
import AboutUs from "../Components/AboutUs";
import Yalda from "../Components/Layouts/landing/Yalda";
import Register from "../Components/Login/Register";
import Basket from "../Components/Shopping/Basket/Basket";
import Product from "../Components/Shopping/Product";
import Home from "../Components/Home";
import LoginPage from "../Components/Login/LoginPage";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/listing",
        component: Listing
    },
    {
        path: "/about-us",
        component: AboutUs
    },
    {
        path: "/yalda",
        component: Yalda,
        landingLayout: true
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/basket",
        component: Basket,
        private: true
    },
    {
        path: "/product/:id",
        component: Product
    }
]





export default routes;
