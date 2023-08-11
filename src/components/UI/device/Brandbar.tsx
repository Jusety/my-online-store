import { Layout } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deviceSlicer } from "../../../app/reducers/device";
import { IBrand } from "../../../models/deviceInterface/IBrand";

interface BrandbarProps {}

const Brandbar: React.FC<BrandbarProps> = () => {
    const dispatch = useAppDispatch();
    const { brand, selectedBrand } = useAppSelector((state) => state.device);

    const clearBrand = () => {
        dispatch(deviceSlicer.actions.setSelectedBrand({} as IBrand));
    };

    const setBrand = (b: IBrand) => {
        dispatch(deviceSlicer.actions.setSelectedBrand(b));
    };

    return (
        <Layout>
            <div className="brandLayout">
                <div
                    className="listItem card"
                    style={{ fontSize: 18 }}
                    onClick={clearBrand}
                >
                    Clear Brand
                </div>
                {brand.map((b) => (
                    <div
                        key={b.id}
                        className={
                            b.id === selectedBrand.id
                                ? "listItem listItem-selected card"
                                : "listItem card"
                        }
                        onClick={() => setBrand(b)}
                    >
                        {b.name}
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Brandbar;
