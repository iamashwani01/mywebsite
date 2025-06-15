// src/components/NeonButton.js
import React from "react";
import "./NeonButton.css";

export default function NeonButton({ children, href }) {
  return (
    <a href={href} className="neon-button">
      {children}
    </a>
  );
}
