// src/components/ui/card.jsx
import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-lg border border-gray-300 bg-white p-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
