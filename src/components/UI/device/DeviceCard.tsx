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
        let localCart = [...cartDevice];

        for (let i = 0; i < localCart.length; i++) {
            if (localCart[i].id === Number(id)) {
                localCart.splice(i, 1);
                break;
            }
        }

        dispatch(deviceSlicer.actions.setCartDevice(localCart));
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
                <h3 className="justify-center">{localDevice?.price}</h3>
                <div className="justify-center" style={{ marginTop: 20 }}>
                    <Button onClick={addToCart} style={{ marginRight: 20 }}>
                        Add to cart
                    </Button>
                    {cartDevice.find((d) => d.id === Number(id)) !==
                        undefined && (
                        <Button onClick={removeFromCart}>
                            Remove from cart
                        </Button>
                    )}
                </div>
                <div style={{ marginTop: 30 }} className="justify-center">
                    In Cart:
                    {cartDevice.filter((d) => d.id === Number(id)).length}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceCard;
