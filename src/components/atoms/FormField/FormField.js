import React from "react";

export default function FormField({ placeholder, value, type, onChange }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
