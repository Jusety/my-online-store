import { Col, Layout, Row } from "antd";
import React from "react";
import Typebar from "../components/UI/device/Typebar";
import Brandbar from "../components/UI/device/Brandbar";
import DeviceList from "../components/UI/device/DeviceList";

interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
    return (
        <Layout>
            <Row style={{ marginTop: 20, width: "62vw" }} className="h100">
                <Col md={3}>
                    <Typebar />
                </Col>
                <Col md={9}>
                    <Brandbar />
                    <DeviceList />
                </Col>
            </Row>
        </Layout>
    );
};

export default Shop;
