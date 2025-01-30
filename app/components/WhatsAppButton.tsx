"use client";

import React from "react";
import Image from "next/image";

const WhatsAppButton: React.FC = () => {
  const phoneNumber: string = "254772464437"; // Your WhatsApp number
  const message: string = encodeURIComponent("Hello! I'm interested in your services.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <Image
        src="/images/whatsapp-icon.png"
        alt="WhatsApp"
        width={50}
        height={50}
      />
    </a>
  );
};

export default WhatsAppButton;
