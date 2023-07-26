import { Layout, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { IDevice } from "../models/deviceInterface/IDevice";
import DeviceDesc from "../components/UI/device/DeviceDesc";
import DeviceRating from "../components/UI/device/DeviceRating";
import DeviceImg from "../components/UI/device/DeviceImg";
import DeviceCard from "../components/UI/device/DeviceCard";

interface DevicePageProps {}

const DevicePage: React.FC<DevicePageProps> = () => {
    const [localDevice, setLocalDevice] = useState({} as IDevice | undefined);
    const { device } = useAppSelector((state) => state.device);
    const { id } = useParams();

    useEffect(() => {
        setLocalDevice(device.find((d) => d.id === Number(id)));
    }, [id, device]);

    return (
        <Layout>
            <Row style={{ marginTop: 20, marginLeft: 20 }}>
                <DeviceImg localDevice={localDevice} />
                <DeviceRating localDevice={localDevice} />
                <DeviceCard localDevice={localDevice} />
            </Row>
            <DeviceDesc localDevice={localDevice} />
        </Layout>
    );
};

export default DevicePage;
