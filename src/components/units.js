import React from "react";

/**
 * @param {string} unit - Current selected unit ('cm' or 'inches')
 * @param {function} onToggle - Unit change handler
 */

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1">
        <button
          onClick={() => onToggle("cm")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            unit === "cm"
              ? "bg-white/30 text-white shadow-lg"
              : "text-white/70 hover:text-white/90"
          }`}
        >
          CM
        </button>
        <button
          onClick={() => onToggle("inches")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            unit === "inches"
              ? "bg-white/30 text-white shadow-lg"
              : "text-white/70 hover:text-white/90"
          }`}
        >
          INCHES
        </button>
      </div>
    </div>
  );
};

export default UnitToggle;
