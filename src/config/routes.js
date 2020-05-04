import Listing from "../Components/Shopping/Listing";
import AboutUs from "../Components/AboutUs";
import Yalda from "../Components/Layouts/landing/Yalda";
import Register from "../Components/Login/Register";
import Basket from "../Components/Shopping/Basket";
import Product from "../Components/Shopping/Product";
import Home from "../Components/Home";
import LoginPage from "../Components/Login/LoginPage";

const routes = {
    home: {
        title: "home",
        path: "/",
        component: Home
    },
    listing: {
        title: "listing",
        path: "/listing",
        component: Listing
    },
    aboutUs: {
        title: "about-us",
        path: "/about-us",
        component: AboutUs
    }
    ,
    landing: {
        title: "landing",
        path: "/yalda",
        component: Yalda
    },
    register: {
        title: "register",
        path: "/register",
        component: Register
    },
    login: {
        title: "login",
        path: "/login",
        component: LoginPage
    },
    basket: {
        title: "basket",
        path: "/basket",
        component: Basket
    },
    product: {
        title: "product",
        path: "/product/:id",
        component: Product
    }
}





export default routes;
