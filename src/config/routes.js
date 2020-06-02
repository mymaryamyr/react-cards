import Listing from "../Components/Shopping/Listing";
import AboutUs from "../Components/AboutUs";
import Yalda from "../Components/Layouts/landing/Yalda";
import Basket from "../Components/Shopping/Basket/Basket";
import Product from "../Components/Shopping/Product";
import Home from "../Components/Home";
import LoginPage from "../Components/Login/LoginPage";
import LayoutMain from "../Components/Layouts/LayoutMain";
import LayoutLanding from "../Components/Layouts/LayoutLanding";
import PrivateRoute from "../Components/Layouts/PrivateRoute";

const routes = [
    {
        layout: LayoutMain,
        subRoutes:[
            {
                title: "home",
                path: "/home",
                component: Home,
            },
            {
                title: "listing",
                path: "/listing",
                component: Listing,
            },
            {
                title: "about-us",
                path: "/about-us",
                component: AboutUs,
            },
            {
                title: "login",
                path: "/login",
                component: LoginPage,
            },
            {
                title: "product",
                path: "/product/:id",
                component: Product,
            },
            {
                title: "basket",
                path: "/basket",
                component: Basket,
                private: true,
            }
        ]
    },
    {
        layout: LayoutLanding,
        subRoutes: [
            {
                title: "landing",
                path: "/yalda",
                component: Yalda,
            }
        ]
    }
]





export default routes;
