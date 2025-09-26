import React from "react";

export default function Contact() {
  return (
    <div className="text-sm text-black p-6 rounded-2xl backdrop-blur-lg bg-white/40 shadow-lg border border-white/30 max-w-sm mx-auto animate-fadeIn space-y-4">

      {/* Phone */}
      <div className="flex items-center gap-2">
        <span>📞</span>
        <span>(+27) 63 335 1978</span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2">
        <span>✉️</span>
        <span>eltonmaruthulle@gmail.com</span>
      </div>

      {/* Buttons Row */}
      <div className="flex gap-4 mt-2">
        {/* GitHub Button */}
        <a
          href="https://github.com/Elton-Maruthulle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-2 rounded-lg bg-gray-900 text-white font-semibold shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-800"
        >
          GitHub
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://linkedin.com/in/eltonmaruthulle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-2 rounded-lg bg-[#0A66C2] text-white font-semibold shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#004182]"
        >
          LinkedIn
        </a>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <span>📍</span>
        <span>Boksburg, Johannesburg</span>
      </div>
    </div>
  );
}
