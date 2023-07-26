import { Layout, List } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deviceSlicer } from "../../../app/reducers/device";

interface TypebarProps {}

const Typebar: React.FC<TypebarProps> = () => {
    const { type, selectedType } = useAppSelector((state) => state.device);
    const dispatch = useAppDispatch();

    return (
        <Layout>
            <List>
                {type.map((t) => (
                    <div
                        style={{ marginTop: 10, marginLeft: 3 }}
                        className={
                            selectedType.id === t.id
                                ? "listItem-selected listItem"
                                : "listItem"
                        }
                        key={t.id}
                        onClick={() =>
                            dispatch(deviceSlicer.actions.setSelectedType(t))
                        }
                    >
                        {t.name}
                    </div>
                ))}
            </List>
        </Layout>
    );
};

export default Typebar;
