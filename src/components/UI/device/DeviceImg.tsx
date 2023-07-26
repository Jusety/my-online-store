import { Col, Image } from "antd";
import React from "react";
import { IDevice } from "../../../models/deviceInterface/IDevice";

interface DeviceImgProps {
    localDevice: IDevice | undefined;
}

const DeviceImg: React.FC<DeviceImgProps> = ({ localDevice }) => {
    return (
        <Col md={4}>
            <Image src={localDevice?.img} height={260} width={320} />
        </Col>
    );
};

export default DeviceImg;
