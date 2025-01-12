import React from "react";
import { Layout, Typography, Row, Col, Card, Divider } from "antd";
import { SmileOutlined, TeamOutlined, RocketOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f9f9f9" }}>
      <Content style={{ padding: "50px" }}>
        <Card style={{ maxWidth: "1200px", margin: "auto", borderRadius: "10px" }}>
          <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
            About Us
          </Title>
          <Paragraph style={{ fontSize: "16px", textAlign: "center" }}>
            Welcome to our Flower Bidding Platform! We connect farmers, wholesalers, and users 
            in an innovative marketplace for flowers. Our goal is to empower farmers, provide 
            wholesalers with efficient procurement options, and give users access to premium 
            flowers via an exciting bidding experience.
          </Paragraph>

          <Divider />

          <Row gutter={[24, 24]} style={{ marginTop: "30px" }}>
            <Col xs={24} md={8}>
              <Card
                hoverable
                style={{ textAlign: "center", borderRadius: "10px" }}
              >
                <SmileOutlined style={{ fontSize: "40px", color: "#52c41a" }} />
                <Title level={4} style={{ marginTop: "10px" }}>
                  Our Vision
                </Title>
                <Paragraph>
                  To revolutionize the floral industry by fostering transparency 
                  and direct connections between stakeholders.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                style={{ textAlign: "center", borderRadius: "10px" }}
              >
                <TeamOutlined style={{ fontSize: "40px", color: "#1890ff" }} />
                <Title level={4} style={{ marginTop: "10px" }}>
                  Our Team
                </Title>
                <Paragraph>
                  We are a passionate group of developers, designers, and industry 
                  experts dedicated to creating the best bidding platform for flowers.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                style={{ textAlign: "center", borderRadius: "10px" }}
              >
                <RocketOutlined style={{ fontSize: "40px", color: "#faad14" }} />
                <Title level={4} style={{ marginTop: "10px" }}>
                  Our Mission
                </Title>
                <Paragraph>
                  To ensure fair pricing, reduce wastage, and make flower trading 
                  more accessible for everyone involved.
                </Paragraph>
              </Card>
            </Col>
          </Row>

          <Divider />

          <Paragraph style={{ textAlign: "center", marginTop: "20px", fontSize: "16px" }}>
            Whether you're a farmer looking to showcase your flowers, a wholesaler managing 
            your tasks, or a user bidding on premium flowers, we are here to make the 
            experience seamless and enjoyable. Join us in shaping the future of floral trading!
          </Paragraph>
        </Card>
      </Content>
    </Layout>
  );
};

export default About;
