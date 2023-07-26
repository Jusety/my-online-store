import { Layout } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deviceSlicer } from "../../../app/reducers/device";

interface BrandbarProps {}

const Brandbar: React.FC<BrandbarProps> = () => {
    const dispatch = useAppDispatch();
    const { brand, selectedBrand } = useAppSelector((state) => state.device);

    return (
        <Layout>
            <div className="brandLayout">
                {brand.map((b) => (
                    <div
                        key={b.id}
                        className={
                            b.id === selectedBrand.id
                                ? "listItem listItem-selected card"
                                : "listItem card"
                        }
                        onClick={() => {
                            dispatch(deviceSlicer.actions.setSelectedBrand(b));
                        }}
                    >
                        {b.name}
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Brandbar;
