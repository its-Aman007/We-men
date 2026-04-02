import React, { useEffect, useState } from "react";

const PHONE_NUMBER = "9112121212";

const WhatsAppButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const message = "Hi, I want to know more about We-Men";
  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        padding: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp.png"
        width="40"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;