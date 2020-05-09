import Listing from "../Components/Shopping/Listing";
import AboutUs from "../Components/AboutUs";
import Yalda from "../Components/Layouts/landing/Yalda";
import Register from "../Components/Login/Register";
import Basket from "../Components/Shopping/Basket";
import Product from "../Components/Shopping/Product";
import Home from "../Components/Home";
import LoginPage from "../Components/Login/LoginPage";

const routes = [
    {
        title: "home",
        path: "/react-cards",
        component: Home
    },
    {
        title: "listing",
        path: "/listing",
        component: Listing
    },
    {
        title: "about-us",
        path: "/about-us",
        component: AboutUs
    },
    {
        title: "landing",
        path: "/yalda",
        component: Yalda
    },
    {
        title: "register",
        path: "/register",
        component: Register
    },
    {
        title: "login",
        path: "/login",
        component: LoginPage
    },
    {
        title: "basket",
        path: "/basket",
        component: Basket
    },
    {
        title: "product",
        path: "/product/:id",
        component: Product
    }
]





export default routes;
