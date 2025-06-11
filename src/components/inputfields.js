import React from "react";

/**
 * @param {string} label - Input label
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {string} placeholder - Placeholder text
 * @param {React.Component} icon - Lucide icon component
 * @param {string} unit - Unit display text
 * @param {string} error - Error message
 */

const InputFields = ({
  label,
  value,
  onChange,
  placeholder,
  icon: Icon,
  unit,
  error,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-white/90 text-sm font-semibold mb-3 tracking-wide">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <Icon className="h-5 w-5 text-white/60 group-focus-within:text-white/80 transition-colors" />
        </div>
        <input
          type="number"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-16 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl 
                     focus:bg-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30
                     transition-all duration-300 text-white placeholder-white/50 text-lg"
        />
        {unit && (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <span className="text-white/70 text-sm font-medium bg-white/10 px-2 py-1 rounded-lg">
              {unit}
            </span>
          </div>
        )}
      </div>
      {error && (
        <p className="text-rose-300 text-sm mt-2 font-medium">{error}</p>
      )}
    </div>
  );
};

export default InputFields;
