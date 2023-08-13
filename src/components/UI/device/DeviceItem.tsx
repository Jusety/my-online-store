import React from "react";
import { IDevice } from "../../../models/deviceInterface/IDevice";
import { Col, Image } from "antd";
import { RouteNames } from "../../../routes";
import { generatePath, useNavigate } from "react-router-dom";

interface DeviceItemProps {
    device: IDevice;
}

const DeviceItem: React.FC<DeviceItemProps> = ({ device }) => {
    const navigate = useNavigate();

    return (
        <Col md={3} style={{ marginLeft: 120 }}>
            <div style={{ width: 250, cursor: "pointer" }} className="card">
                <div
                    onClick={() =>
                        navigate(
                            generatePath(RouteNames.DEVICE_ROUTE, {
                                id: device?.id.toString(),
                            })
                        )
                    }
                >
                    <Image src={device.img} width="13vw" height="10vw" />
                    <div style={{ marginTop: "1.5vh" }} className="mg">
                        <div>{device.brand}</div>
                        <div>{device.name}</div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default DeviceItem;
