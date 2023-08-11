import React from "react";
import { Col } from "antd";
import { IDevice } from "../../../models/deviceInterface/IDevice";

interface DeviceRatingProps {
    localDevice: IDevice | undefined;
}

const DeviceRating: React.FC<DeviceRatingProps> = ({ localDevice }) => {
    return (
        <Col md={4} style={{ marginLeft: 300 }}>
            <div
                className="alignment-class"
                style={{
                    marginRight: 100,
                }}
            >
                <h2>{localDevice?.name}</h2>
                <div
                    className="rating"
                    style={{
                        background: `url(${"/assets/star.png"}) no-repeat center center`,
                        backgroundSize: "cover",
                    }}
                >
                    {localDevice?.rating}
                </div>
            </div>
        </Col>
    );
};

export default DeviceRating;
