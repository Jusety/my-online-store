import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { RouteNames, privateRoutes, publicRoutes } from "../routes";

const AppRouter: React.FC = () => {
    const { isAuth } = useAppSelector((state) => state.auth);

    return (
        <Routes>
            {isAuth &&
                privateRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.Component />}
                    />
                ))}
            {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.Component />}
                />
            ))}
            <Route
                path="/*"
                element={<Navigate to={RouteNames.SHOP_ROUTE} replace />}
            />
        </Routes>
    );
};

export default AppRouter;
