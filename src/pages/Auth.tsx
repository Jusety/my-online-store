import React from "react";
import LoginForm from "../components/UI/form/LoginForm";
import { Layout, Row } from "antd";
import LoginModal from "../components/UI/modal/LoginModal";
import { useLocation } from "react-router-dom";
import { RouteNames } from "../routes";

interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
    const location = useLocation();
    const isLogin = location.pathname === RouteNames.LOGIN_ROUTE;

    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <LoginModal isLogin={isLogin}>
                    <LoginForm isLogin={isLogin} />
                </LoginModal>
            </Row>
        </Layout>
    );
};

export default Auth;
