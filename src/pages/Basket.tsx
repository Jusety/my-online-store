import { Layout, Row } from "antd";
import React from "react";
import { useAppSelector } from "../app/hooks";
import DeviceItem from "../components/UI/device/DeviceItem";

interface BasketProps {}

const Basket: React.FC<BasketProps> = () => {
    const { cartDevice } = useAppSelector((state) => state.device);

    return (
        <Layout style={{ background: "white" }}>
            <Row className="cart-row">
                {cartDevice.map((device, index) => (
                    <div key={index}>
                        <DeviceItem device={device} />
                    </div>
                ))}
            </Row>
        </Layout>
    );
};

export default Basket;
