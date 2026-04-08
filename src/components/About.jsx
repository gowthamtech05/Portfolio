import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`min-h-screen px-6 py-24 flex flex-col items-center transition-colors duration-500 ${
        isDark ? "bg-[#0e0e0e] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <h2
        className={`text-4xl md:text-5xl font-black font-headline mb-12 bg-clip-text text-transparent uppercase tracking-tighter ${
          isDark
            ? "bg-linear-to-r from-cyan-400 to-cyan-700"
            : "bg-linear-to-r from-cyan-600 to-blue-800"
        }`}
      >
        About Me
      </h2>

      <div className="w-full max-w-4xl">
        <div
          className={`p-8 md:p-12 rounded-3xl border transition-all duration-300 ${
            isDark
              ? "bg-white/5 border-white/10 hover:border-cyan-500/30"
              : "bg-white border-black/5 shadow-sm hover:shadow-md"
          }`}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-500">
              Architecting Modern Web Applications
            </h3>
            <p
              className={`text-lg leading-relaxed ${isDark ? "text-neutral-400" : "text-slate-600"}`}
            >
              MERN Stack Developer with hands-on experience building scalable
              web applications using modern technologies. Skilled in REST APIs,
              authentication, payment integration, and real-world project
              development. Passionate about clean code, efficient solutions, and
              continuously improving technical and problem-solving skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-500 font-bold mb-2">
                  Location
                </p>
                <p className="text-lg font-semibold">Madurai, Tamil Nadu</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-500 font-bold mb-2">
                  Interests
                </p>
                <p className="text-lg font-semibold">
                  • API Integration • Responsive Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
