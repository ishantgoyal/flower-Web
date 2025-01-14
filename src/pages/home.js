import React from "react";
import { Row, Col, Card, Button } from "antd";

const solutionsData = [
  {
    title: "Small & Mid-Sized Farms",
    description:
      "Say goodbye to weekly availability lists. Streamline your farm's business operations and inform your crop planning with real-time data and analytics.",
    buttonText: "Solution for Farmers",
    buttonLink: "#",
  },
  {
    title: "Hubs, Co-Ops & Collectives",
    description:
      "Your hub is scaling but your systems are broken. We've got you. Automatic product aggregation across your member farms? Check. Farm-level transparency? Check. Receiving lists? Check.",
    buttonText: "Solution for Hubs",
    buttonLink: "#",
  },
];

const coreValuesData = [
  {
    title: "Farmers first",
    description:
      "Farmers – their goals and their challenges – lie at the core of everything we do. Every decision we make aims to improve the lives of the farming community. We spend time visiting our farmers and hubs because we want to deeply understand your needs.",
    icon: "🌱",
  },
  {
    title: "Supporting local",
    description:
      "Building more robust local economies keeps dollars in your community, growing jobs and opportunities where they matter most to you.",
    icon: "🏡",
  },
  {
    title: "Sustainability",
    description:
      "Shortening the supply chain and supporting farms that steward land responsibly improves local ecosystems, biodiversity, and reduces our collective carbon footprint.",
    icon: "🌍",
  },
];

const auctionData = [
  {
    title: "Roses",
    image: "https://images.unsplash.com/photo-1513628253939-010e64ac66cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    auctionLink: "See Auctions",
  },
  {
    title: "Tulips",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    auctionLink: "See Auctions",
  },
  {
    title: "Sunflowers",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    auctionLink: "See Auctions",
  },
  {
    title: "Daisies",
    image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    auctionLink: "See Auctions",
  },
  {
    title: "Orchids",
    image: "https://images.unsplash.com/photo-1557682250-274673de6b87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    auctionLink: "See Auctions",
  },
  {
    title: "Lilies",
    image: "https://images.unsplash.com/photo-1525164286251-3e5f8d6c36f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    auctionLink: "See Auctions",
  },
  {
    title: "Cherry Blossoms",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    auctionLink: "See Auctions",
  },
  {
    title: "Lavender",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    auctionLink: "See Auctions",
  },
];

const testimonialsData = [
  {
    name: "John Doe",
    designation: "CEO, Tech Innovators",
    feedback:
      "This platform has completely transformed the way we operate. The user-friendly interface and exceptional support are top-notch!",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Sarah Smith",
    designation: "Marketing Manager, Bright Future",
    feedback:
      "Absolutely amazing experience! The tools and features provided have made a significant impact on our business growth.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Michael Johnson",
    designation: "Founder, Green Fields",
    feedback:
      "Their commitment to sustainability and local support is inspiring. Truly a game-changer in the industry.",
    avatar: "https://via.placeholder.com/100",
  },
];


const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
          Designed to Grow with (and for) You
        </h1>
        <p style={{ fontSize: "18px", margin: "20px 0" }}>
          Rooted helps farmers, hubs, and buyers build a more profitable, sustainable future.
        </p>
        <Row gutter={[16, 16]} justify="center">
          {solutionsData.map((item, index) => (
            <Col xs={24} sm={12} md={10} lg={8} key={index}>
              <Card style={{ textAlign: "left", border: "1px solid #e8e8e8", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>{item.title}</h3>
                <p style={{ fontSize: "16px", margin: "10px 0 20px" }}>{item.description}</p>
                <Button
                  type="primary"
                  href={item.buttonLink}
                  style={{ backgroundColor: "#f8c200", borderColor: "#f8c200" }}
                >
                  {item.buttonText}
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
          Our Core Values
        </h2>
        <Row gutter={[16, 16]} justify="center">
          {coreValuesData.map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card bordered={false} style={{ textAlign: "left", height: "100%" }}>
                <div style={{ fontSize: "24px", marginBottom: "10px" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Row gutter={[16, 16]}>
        {auctionData.map((item, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              cover={
                <img
                  alt={item.title}
                  src={item.image}
                  style={{ height: "150px", objectFit: "cover" }}
                />
              }
              bordered={false}
            >
              <h3>{item.title}</h3>
              <a href="#">{item.auctionLink}</a>
            </Card>
            <br />
          </Col>
        ))}
      </Row>

      <div style={{ padding: "50px 20px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", fontWeight: "bold", marginBottom: "40px" }}>
          What Our Clients Say
        </h2>
        <Row gutter={[32, 32]} justify="center">
          {testimonialsData.map((testimonial, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                bordered={false}
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    marginBottom: "20px",
                  }}
                />
                <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  {testimonial.name}
                </h3>
                <p style={{ fontStyle: "italic", marginBottom: "15px", color: "#666" }}>
                  {testimonial.designation}
                </p>
                <p style={{ color: "#444" }}>{testimonial.feedback}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
