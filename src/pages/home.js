import React from "react";
import { Row, Col, Card } from "antd";

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

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
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
    </div>
  );
};

export default Home;
