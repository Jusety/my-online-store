import { Button, Layout } from "antd";
import React, { useState } from "react";
import TypeModal from "../components/UI/modal/TypeModal";
import BrandModal from "../components/UI/modal/BrandModal";
import DeviceModal from "../components/UI/modal/DeviceModal";

interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <Layout className="modalLayout">
            <Button onClick={() => setTypeVisible(true)}>Add type</Button>
            <Button onClick={() => setBrandVisible(true)}>Add brand</Button>
            <Button onClick={() => setDeviceVisible(true)}>Add device</Button>
            <TypeModal
                typeVisible={typeVisible}
                setTypeVisible={setTypeVisible}
            />
            <BrandModal
                brandVisible={brandVisible}
                setBrandVisible={setBrandVisible}
            />
            <DeviceModal
                deviceVisible={deviceVisible}
                setDeviceVisible={setDeviceVisible}
            />
        </Layout>
    );
};

export default Admin;
