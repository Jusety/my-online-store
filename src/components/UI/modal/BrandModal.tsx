import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deviceSlicer } from "../../../app/reducers/device";
import { generateId } from "../../../utils/generateId";

interface BrandModalProps {
    brandVisible: boolean;
    setBrandVisible: (avg: boolean) => void;
}

const BrandModal: React.FC<BrandModalProps> = ({
    brandVisible,
    setBrandVisible,
}) => {
    const { brand } = useAppSelector((state) => state.device);
    const dispatch = useAppDispatch();

    const closeHandle = () => {
        setBrandVisible(false);
    };

    const [localBrand, setLocalBrand] = useState("");

    const submit = () => {
        dispatch(
            deviceSlicer.actions.setBrand([
                ...brand,
                { id: generateId(), name: localBrand },
            ])
        );
        closeHandle();
    };

    return (
        <Modal
            title={"Create brand"}
            open={brandVisible}
            onOk={closeHandle}
            onCancel={closeHandle}
            footer={null}
        >
            <Form
                onFinish={submit}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Brand name"
                    name="brandName"
                    rules={[
                        {
                            required: true,
                            message: "Please input brand name!",
                        },
                    ]}
                >
                    <Input
                        value={localBrand}
                        onChange={(e) => setLocalBrand(e.target.value)}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default BrandModal;
