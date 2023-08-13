import React from "react";
import { useAppSelector } from "../../../app/hooks";
import DeviceItem from "./DeviceItem";
import { Row } from "antd";

interface DeviceListProps {}

const DeviceList: React.FC<DeviceListProps> = () => {
    const { device, selectedBrand, selectedType } = useAppSelector(
        (state) => state.device
    );

    return (
        <Row
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "92vw",
                height: "70vh",
                rowGap: "10vh",
            }}
            className="cart-row"
        >
            {selectedBrand.name === undefined &&
                device
                    ?.filter((d) => d.type === selectedType.name)
                    .map((dev) => <DeviceItem device={dev} key={dev.id} />)}
            {selectedType.name === undefined &&
                device
                    ?.filter((d) => d.brand === selectedBrand.name)
                    .map((dev) => <DeviceItem device={dev} key={dev.id} />)}
            {selectedBrand.name === undefined &&
                selectedType.name === undefined &&
                device.map((dev) => <DeviceItem device={dev} key={dev.id} />)}

            {device
                ?.filter(
                    (d) =>
                        d.brand === selectedBrand.name &&
                        d.type === selectedType.name
                )
                .map((dev) => (
                    <DeviceItem device={dev} key={dev.id} />
                ))}
        </Row>
    );
};

export default DeviceList;
