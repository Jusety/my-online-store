import { Layout, List } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deviceSlicer } from "../../../app/reducers/device";
import { IType } from "../../../models/deviceInterface/IType";

interface TypebarProps {}

const Typebar: React.FC<TypebarProps> = () => {
    const { type, selectedType } = useAppSelector((state) => state.device);
    const dispatch = useAppDispatch();

    const clearType = () => {
        dispatch(deviceSlicer.actions.setSelectedType({} as IType));
    };

    const setType = (t: IType) => {
        dispatch(deviceSlicer.actions.setSelectedType(t));
    };
    return (
        <Layout>
            <List>
                <div className="listItem" onClick={clearType}>
                    Clear Type
                </div>
                {type.map((t) => (
                    <div
                        className={
                            selectedType.id === t.id
                                ? "listItem-selected listItem"
                                : "listItem"
                        }
                        key={t.id}
                        onClick={() => setType(t)}
                    >
                        {t.name}
                    </div>
                ))}
            </List>
        </Layout>
    );
};

export default Typebar;
