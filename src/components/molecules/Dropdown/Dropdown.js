import React from "react";

export default function Dropdown({ label, options, value, onChange }) {
  return (
    <div className="mb-4">
      <select
        className="border border-gray-300 rounded px-3 py-2 w-full"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">-- {label} --</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
