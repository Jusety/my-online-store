import Admin from "../pages/Admin";
import Auth from "../pages/Auth";
import Basket from "../pages/Basket";
import DevicePage from "../pages/DevicePage";
import Profile from "../pages/Profile";
import Shop from "../pages/Shop";

export enum RouteNames {
    LOGIN_ROUTE = "/login",
    REGISTRATION_ROUTE = "/registration",
    ADMIN_ROUTE = "/admin",
    SHOP_ROUTE = "/",
    DEVICE_ROUTE = "/device/:id",
    BASKET_ROUTE = "/basket",
    PROFILE_ROUTE = "/profile",
}

interface IRoute {
    path: string;
    Component: React.ComponentType;
}

export const privateRoutes: IRoute[] = [
    {
        path: RouteNames.BASKET_ROUTE,
        Component: Basket,
    },
    {
        path: RouteNames.ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: RouteNames.PROFILE_ROUTE,
        Component: Profile,
    },
];

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: RouteNames.REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: RouteNames.SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: RouteNames.DEVICE_ROUTE,
        Component: DevicePage,
    },
];
