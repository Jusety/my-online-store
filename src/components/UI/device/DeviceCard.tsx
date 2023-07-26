import { Button, Card, Col } from "antd";
import React from "react";
import { IDevice } from "../../../models/deviceInterface/IDevice";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { useDispatch } from "react-redux";
import { deviceSlicer } from "../../../app/reducers/device";

interface DeviceCardProps {
    localDevice: IDevice | undefined;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ localDevice }) => {
    const { cartDevice, device } = useAppSelector((state) => state.device);
    const dispatch = useDispatch();
    const { id } = useParams();

    const addToCart = () => {
        dispatch(
            deviceSlicer.actions.setCartDevice([
                ...cartDevice,
                device.find((d) => d.id === Number(id)),
            ])
        );
    };

    const removeFromCart = () => {
        dispatch(
            deviceSlicer.actions.setCartDevice(
                device.filter((d) => d.id !== Number(id))
            )
        );
    };

    return (
        <Col md={4}>
            <Card
                className="alignment-class cart-card"
                style={{
                    fontSize: 32,
                    width: 300,
                    height: 250,
                }}
            >
                <h3 style={{ display: "flex", justifyContent: "center" }}>
                    {localDevice?.price}
                </h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button onClick={addToCart} style={{ marginRight: 20 }}>
                        Add to cart
                    </Button>
                    {cartDevice.length !== 0 && (
                        <Button onClick={removeFromCart}>
                            Remove from cart
                        </Button>
                    )}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceCard;
