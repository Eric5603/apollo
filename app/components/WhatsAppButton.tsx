"use client"; // Required for event-driven components in Next.js 13+

import React from "react";

const WhatsAppButton: React.FC = () => {
  const phoneNumber: string = "+25472464437"; // Replace with your actual WhatsApp number
  const message: string = encodeURIComponent("Hello! I'm interested in your services.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        cursor: "pointer",
        textDecoration: "none",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      💬
    </a>
  );
};

export default WhatsAppButton;
