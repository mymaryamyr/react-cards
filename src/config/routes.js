import Listing from "../Components/Shopping/Listing";
import AboutUs from "../Components/AboutUs";
import Yalda from "../Components/Layouts/landing/Yalda";
import Basket from "../Components/Shopping/Basket/Basket";
import Product from "../Components/Shopping/Product";
import Home from "../Components/Home";
import LoginPage from "../Components/Login/LoginPage";

const routes = [
    {
        title: "home",
        path: "/",
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
        component: Yalda,
        landingLayout: true
    },
    {
        title: "login",
        path: "/login",
        component: LoginPage
    },
    {
        title: "basket",
        path: "/basket",
        component: Basket,
        private: true
    },
    {
        title: "product",
        path: "/product/:id",
        component: Product
    }
]





export default routes;
