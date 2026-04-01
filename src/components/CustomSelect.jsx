import { useState, useRef, useEffect } from "react";

export default function CustomSelect({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // 🔥 Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Selected */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full p-3 rounded-xl bg-white/10 border border-white/10 cursor-pointer flex justify-between items-center"
      >
        <span>{value}</span>
        <span>⌄</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 w-full mt-2 bg-slate-900 border border-white/10 rounded-xl shadow-2xl z-50">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="p-3 hover:bg-indigo-600 hover:pl-5 cursor-pointer transition-all duration-200"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}