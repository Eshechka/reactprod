import {RouteProps} from "react-router-dom";
import {About} from "../../../pages/About";
import {Contacts} from "../../../pages/Contacts";

export enum AppRoutes {
    ABOUT = 'about',
    CONTACTS = 'contacts',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.CONTACTS]: '/contacts',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <About />,
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath.contacts,
        element: <Contacts />,
    },
}