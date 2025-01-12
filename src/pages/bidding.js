import React from "react";

const products = [
  {
    id: 1,
    title: "Fristam FZX2150 1 600V Model TE1BF0X0N",
    openingBid: 500,
    currentBid: 500,
    timeLeft: "2h 26m",
    location: "Quebec QC, Quebec",
  },
  {
    id: 2,
    title: "Fristam FZX2150 1 600V Model CT010504NPW22WD",
    openingBid: 700,
    currentBid: 700,
    timeLeft: "2h 27m",
    location: "Quebec City, Quebec",
  },
  {
    id: 3,
    title: "Fristam FZX100 1 600V Model FZX100",
    openingBid: 500,
    currentBid: 500,
    timeLeft: "2h 28m",
    location: "Quebec City, Quebec",
  },
  // Add more products here
];

const ProductCard = ({ product }) => {
  const imageUrl = `https://picsum.photos/300/200?random=${product.id}`; // Unique image for each product

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          position: "relative",
          marginBottom: "16px",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            background: "#000",
            color: "#fff",
            padding: "4px 8px",
            fontSize: "12px",
            borderRadius: "4px",
          }}
        >
          Featured lot
        </span>
        <img
          src={imageUrl}
          alt={product.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
      <h3 style={{ fontSize: "18px", margin: "12px 0" }}>{product.title}</h3>
      <p style={{ margin: "8px 0", fontSize: "14px", color: "#555" }}>
        Current bid: <strong>{product.currentBid} USD</strong>
      </p>
      <p style={{ margin: "8px 0", fontSize: "14px", color: "#555" }}>
        Opening bid: {product.openingBid} USD
      </p>
      <p style={{ margin: "8px 0", fontSize: "14px", color: "#555" }}>
        <strong>Ends in:</strong> {product.timeLeft}
      </p>
      <p style={{ margin: "8px 0", fontSize: "14px", color: "#555" }}>
        <strong>Location:</strong> {product.location}
      </p>
      <button
        style={{
          backgroundColor: "#3b82f6",
          color: "#fff",
          border: "none",
          padding: "10px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Bid
      </button>
    </div>
  );
};

const Bidding = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f4f4f4",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Bidding;
