import React from "react";

/**
 * @param {React.ReactNode} children - Child components
 * @param {string} className - Additional CSS classes
 */
const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
