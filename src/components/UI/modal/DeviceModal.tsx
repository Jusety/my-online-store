import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deviceSlicer } from "../../../app/reducers/device";
import { generateId } from "../../../utils/generateId";
import { generateRate } from "../../../utils/genetateRate";

interface DeviceModalProps {
    deviceVisible: boolean;
    setDeviceVisible: (avg: boolean) => void;
}

const DeviceModal: React.FC<DeviceModalProps> = ({
    deviceVisible,
    setDeviceVisible,
}) => {
    const [localType, setLocalType] = useState("");
    const [localBrand, setLocalBrand] = useState("");
    const [localDevice, setLocalDevice] = useState("");
    const [localPrice, setLocalPrice] = useState(0);
    const { type, brand, device } = useAppSelector((state) => state.device);
    const dispatch = useAppDispatch();

    const submit = () => {
        dispatch(
            deviceSlicer.actions.setDevice([
                ...device,
                {
                    id: generateId(),
                    name: localDevice,
                    brand: localBrand,
                    type: localType,
                    price: localPrice,
                    rating: generateRate(),
                    img: "",
                },
            ])
        );
        closeHandle();
    };

    const closeHandle = () => {
        setDeviceVisible(false);
    };

    return (
        <Modal
            title={"Create device"}
            open={deviceVisible}
            onOk={closeHandle}
            onCancel={closeHandle}
            footer={null}
        >
            <Form
                onFinish={submit}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ display: "flex" }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item>
                    <Form.Item>
                        <Select
                            defaultValue="Select type"
                            style={{ width: 150 }}
                            onChange={(e) => setLocalType(e)}
                        >
                            {type.map((t) => (
                                <Select.Option key={t.id} value={t.name}>
                                    {t.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Select
                            defaultValue="Select brand"
                            style={{ width: 150 }}
                            onChange={(e) => setLocalBrand(e)}
                        >
                            {brand.map((b) => (
                                <Select.Option key={b.id} value={b.name}>
                                    {b.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form.Item>
                <Form.Item style={{ marginLeft: 50 }}>
                    <Form.Item label="Device name">
                        <Input
                            style={{ width: 200 }}
                            value={localDevice}
                            onChange={(e) => setLocalDevice(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Price">
                        <Input
                            type="number"
                            style={{ width: 249 }}
                            value={localPrice}
                            onChange={(e) =>
                                setLocalPrice(Number(e.target.value))
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16 }}
                        style={{
                            position: "relative",
                            top: 50,
                            left: 100,
                        }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: 100 }}
                        >
                            Create
                        </Button>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default DeviceModal;
