import Listing from "../Components/Shopping/Listing";
import AboutUs from "../Components/AboutUs";
import Yalda from "../Components/Layouts/landing/Yalda";
import Register from "../Components/Register";
import Basket from "../Components/Shopping/Basket";
import Product from "../Components/Shopping/Product";

const routes = {
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
