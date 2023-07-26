import React, { useEffect } from "react";
import "./App.css";
import { Layout } from "antd";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { authSlicer } from "./app/reducers/auth";
import { useAppDispatch } from "./app/hooks";
import { IUser } from "./models/IUser";

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            dispatch(authSlicer.actions.setIsAuth(true));
            dispatch(
                authSlicer.actions.setUser(
                    JSON.parse(localStorage.getItem("user") || "") as IUser
                )
            );
        }
    }, [dispatch]);

    return (
        <Layout>
            <Layout.Header>
                <Navbar />
            </Layout.Header>
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
};

export default App;
