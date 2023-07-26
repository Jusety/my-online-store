import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Button, Row } from "antd";
import cart from "../../../assets/shopping-cart.png";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../routes";
import { authSlicer } from "../../../app/reducers/auth";
import { logout } from "../../../app/reducers/auth/userLog";

const Navbar: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loginHandle = () => {
        navigate(RouteNames.LOGIN_ROUTE);
        dispatch(authSlicer.actions.setIsModalLoginOpen(true));
    };

    const { isAuth, user } = useAppSelector((state) => state.auth);

    return (
        <Row justify="end">
            <p id="shop-btn" onClick={() => navigate(RouteNames.SHOP_ROUTE)}>
                SHOP
            </p>
            {isAuth ? (
                <>
                    <div className="login__name">
                        <img
                            alt=""
                            src={cart}
                            className="cart"
                            onClick={() => navigate(RouteNames.BASKET_ROUTE)}
                        />
                        <span
                            onClick={() => navigate(RouteNames.PROFILE_ROUTE)}
                        >
                            {user.username}
                        </span>
                    </div>
                    {user.username === "root" && (
                        <Button
                            className="nav-btn"
                            style={{ marginRight: "10px" }}
                            onClick={() => navigate(RouteNames.ADMIN_ROUTE)}
                        >
                            Admin panel
                        </Button>
                    )}
                    <Button
                        className="nav-btn"
                        onClick={() => dispatch(logout())}
                    >
                        Log out
                    </Button>
                </>
            ) : (
                <>
                    <Button className="nav-btn" onClick={loginHandle}>
                        Log in
                    </Button>
                </>
            )}
        </Row>
    );
};

export default Navbar;
