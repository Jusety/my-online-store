import { Row } from "antd";
import React from "react";
import { IDevice } from "../../../models/deviceInterface/IDevice";

interface DeviceDescProps {
    localDevice: IDevice | undefined;
}

const DeviceDesc: React.FC<DeviceDescProps> = ({ localDevice }) => {
    return (
        <Row
            style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
            }}
        >
            <h1>Configuration</h1>
            {localDevice?.description?.map((desc, index) => (
                <Row
                    key={desc.id}
                    style={{
                        background:
                            index % 2 === 0 ? "lightgray" : "transparent",
                        padding: 10,
                    }}
                >
                    {desc.title}: {desc.def}
                </Row>
            ))}
        </Row>
    );
};

export default DeviceDesc;
