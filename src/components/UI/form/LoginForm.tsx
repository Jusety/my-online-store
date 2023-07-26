import { Button, Checkbox, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { authSlicer } from "../../../app/reducers/auth";
import { login } from "../../../app/reducers/auth/userLog";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../routes";

interface LoginFormProps {
    isLogin: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ isLogin }) => {
    const dispatch = useAppDispatch();
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const { error, isLoading } = useAppSelector((state) => state.auth);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const submit = () => {
        dispatch(login(username, password, checkbox));
        dispatch(authSlicer.actions.setIsModalLoginOpen(false));
    };

    return (
        <Form
            onFinish={submit}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            {error && <h1 style={{ color: "red" }}>Error:{error}</h1>}
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    { required: true, message: "Please input your username!" },
                ]}
            >
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: "Please input your password!" },
                ]}
            >
                <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Item>
            <Row justify="space-evenly">
                {isLogin ? (
                    <Form.Item>
                        Don't have an account?
                        <Link to={RouteNames.REGISTRATION_ROUTE}>
                            {" "}
                            Sign up!
                        </Link>
                    </Form.Item>
                ) : (
                    <Form.Item>
                        Have an account?
                        <Link to={RouteNames.LOGIN_ROUTE}> Sign in!</Link>
                    </Form.Item>
                )}
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox
                        onChange={() => {
                            setCheckbox(!checkbox);
                        }}
                    >
                        Remember me
                    </Checkbox>
                </Form.Item>
            </Row>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
