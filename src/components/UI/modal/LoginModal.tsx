import { Modal } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { authSlicer } from "../../../app/reducers/auth";

interface LoginModalProps {
    children: React.ReactNode;
    isLogin: boolean;
}

const LoginModal: React.FC<LoginModalProps> = ({ children, isLogin }) => {
    const { isModalLoginOpen } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const closeHandle = () => {
        dispatch(authSlicer.actions.setIsModalLoginOpen(false));
    };

    return (
        <>
            <Modal
                title={isLogin ? "Login form" : "Registration form"}
                open={isModalLoginOpen}
                onOk={closeHandle}
                onCancel={closeHandle}
                footer={null}
            >
                {children}
            </Modal>
        </>
    );
};

export default LoginModal;
