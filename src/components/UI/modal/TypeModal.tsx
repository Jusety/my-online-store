import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deviceSlicer } from "../../../app/reducers/device";
import { generateId } from "../../../utils/generateId";

interface TypeModalProps {
    typeVisible: boolean;
    setTypeVisible: (avg: boolean) => void;
}

const TypeModal: React.FC<TypeModalProps> = ({
    typeVisible,
    setTypeVisible,
}) => {
    const { type } = useAppSelector((state) => state.device);
    const dispatch = useAppDispatch();

    const closeHandle = () => {
        setTypeVisible(false);
    };

    const submit = () => {
        dispatch(
            deviceSlicer.actions.setType([
                ...type,
                { id: generateId(), name: localType },
            ])
        );
        closeHandle();
    };

    const [localType, setLocalType] = useState("");

    return (
        <Modal
            title={"Create type"}
            open={typeVisible}
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
                    label="Type name"
                    name="typeName"
                    rules={[
                        {
                            required: true,
                            message: "Please input type name!",
                        },
                    ]}
                >
                    <Input
                        value={localType}
                        onChange={(e) => setLocalType(e.target.value)}
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

export default TypeModal;
