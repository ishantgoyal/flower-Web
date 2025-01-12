import React from "react";
import { Layout, Typography, Row, Col, Card, Form, Input, Button } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form Values: ", values);
    alert("Message sent successfully!");
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#f9f9f9" }}>
      <Content style={{ padding: "50px" }}>
        <Card style={{ maxWidth: "1200px", margin: "auto", borderRadius: "10px" }}>
          <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
            Contact Us
          </Title>
          <Paragraph style={{ fontSize: "16px", textAlign: "center" }}>
            We’re here to help! Get in touch with us for any queries, feedback, or support.
          </Paragraph>

          <Row gutter={[24, 24]} style={{ marginTop: "30px" }}>
            {/* Contact Information Section */}
            <Col xs={24} md={12}>
              <Card
                style={{ borderRadius: "10px", padding: "20px" }}
                hoverable
              >
                <Title level={4}>Our Contact Details</Title>
                <Paragraph>
                  <EnvironmentOutlined style={{ marginRight: "8px" }} />
                  <strong>Address:</strong> 123 Flower Street, Bloom City, FL 45678
                </Paragraph>
                <Paragraph>
                  <PhoneOutlined style={{ marginRight: "8px" }} />
                  <strong>Phone:</strong> +1 123-456-7890
                </Paragraph>
                <Paragraph>
                  <MailOutlined style={{ marginRight: "8px" }} />
                  <strong>Email:</strong> support@flowerbidding.com
                </Paragraph>
              </Card>
            </Col>

            {/* Contact Form Section */}
            <Col xs={24} md={12}>
              <Card
                style={{ borderRadius: "10px", padding: "20px" }}
                hoverable
              >
                <Title level={4}>Send Us a Message</Title>
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  style={{ marginTop: "20px" }}
                >
                  <Form.Item
                    label="Your Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter your name!" }]}
                  >
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                  <Form.Item
                    label="Your Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email!" },
                      { type: "email", message: "Please enter a valid email!" },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>
                  <Form.Item
                    label="Message"
                    name="message"
                    rules={[{ required: true, message: "Please enter your message!" }]}
                  >
                    <Input.TextArea rows={4} placeholder="Write your message here" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </Card>
      </Content>
    </Layout>
  );
};

export default Contact;
