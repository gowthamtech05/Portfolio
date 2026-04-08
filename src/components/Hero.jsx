import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import gowtham from "../assets/IMG_7075.PNG";
import { LuDownload } from "react-icons/lu";
import { FaLocationArrow } from "react-icons/fa";
import { CgBolt } from "react-icons/cg";

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      className={`relative flex items-center justify-center px-6 overflow-hidden transition-colors duration-300
        ${isDark ? "bg-[#131313]" : "bg-white"}`}
      style={{ height: "100dvh", paddingTop: "64px" }}
    >
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-500 
        ${
          isDark
            ? "bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.08)_0%,rgba(19,19,19,0)_70%)]"
            : "bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.04)_0%,rgba(255,255,255,0)_70%)]"
        }`}
      />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
      <div
        className={`absolute bottom-1/4 -left-20 w-80 h-80 blur-[100px] rounded-full 
        ${isDark ? "bg-purple-500/5" : "bg-blue-500/5"}`}
      />

      <div className="relative z-10 max-w-6xl w-full h-full grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-center py-3 md:py-5">
        <div className="md:col-span-7 flex flex-col justify-center gap-2.5 md:gap-4 text-center md:text-left order-2 md:order-1">
          <div className="flex justify-center md:justify-start">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] tracking-[0.18em] uppercase font-bold transition-all
              ${
                isDark
                  ? "bg-white/5 border-white/10 text-cyan-400"
                  : "bg-black/5 border-black/5 text-cyan-700"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for projects
            </div>
          </div>

          <div>
            <h1
              className={`font-black font-headline tracking-tighter leading-[0.85] bg-linear-to-r bg-clip-text text-transparent transition-all
              ${isDark ? "from-[#dbfcff] to-[#00f0ff]" : "from-cyan-600 to-blue-800"}
              text-[10vw] sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl`}
            >
              MALAYAPPA
            </h1>
            <h1
              className={`font-black font-headline tracking-tighter leading-[0.85] bg-linear-to-r bg-clip-text text-transparent transition-all
              ${isDark ? "from-[#dbfcff] to-[#00f0ff]" : "from-cyan-600 to-blue-800"}
              text-[10vw] sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl`}
            >
              GOWTHAM K
            </h1>
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl font-headline font-bold transition-colors mt-1.5
              ${isDark ? "text-neutral-400" : "text-slate-600"}`}
            >
              Mern Stack Developer
            </p>
          </div>

          <p
            className={`text-xs sm:text-sm leading-relaxed font-sans transition-colors mx-auto md:mx-0 max-w-sm md:max-w-md
            ${isDark ? "text-neutral-500" : "text-slate-500"}`}
          >
            MERN Stack Developer with hands-on experience building scalable web
            applications. Passionate about clean code and real-world problem
            solving.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download="Malayappa_Gowtham_Resume.pdf"
              className={`h-10 md:h-11 px-6 md:px-8 font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-95 transition-all duration-300 shadow-lg text-xs md:text-sm
    ${
      isDark
        ? "bg-[#00f0ff] text-[#00363a] shadow-cyan-500/20"
        : "bg-cyan-600 text-white shadow-cyan-900/10"
    }`}
            >
              RESUME
              <LuDownload size={16} />
            </a>

            <a
              href="#contact"
              className={`h-10 md:h-11 px-6 md:px-8 font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-95 transition-all duration-300 border text-xs md:text-sm
      ${
        isDark
          ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
          : "bg-black/5 border-black/10 text-slate-900 hover:bg-black/10"
      }`}
            >
              LET'S TALK
              <FaLocationArrow size={16} />
            </a>
          </div>
        </div>

        <div className="col-span-full md:col-span-5 relative group flex justify-center md:justify-end items-center order-1 md:order-2">
          <div className="absolute -inset-4 bg-cyan-400/10 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

          <div
            className={`relative border rounded-3xl overflow-hidden shadow-2xl transition-all
              w-58 h-62 sm:w-56 sm:h-68
              md:w-full md:h-[70dvh] md:aspect-3/4
            ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"}`}
          >
            <img
              src={gowtham}
              alt="Gowtham Portfolio"
              className={`w-full h-full object-cover object-[50%_15%] transition-all duration-700 group-hover:scale-105 contrast-125
    ${isDark ? "grayscale opacity-80 group-hover:opacity-100" : "opacity-90"}`}
            />

            <div
              className={`absolute inset-0 bg-linear-to-t via-transparent to-transparent
              ${isDark ? "from-[#131313]/80" : "from-white/70"}`}
            />

            <div
              className={`absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3
                p-2 md:p-2.5 backdrop-blur-xl border rounded-xl
                flex justify-between items-center
                translate-y-1 group-hover:translate-y-0 transition-all duration-500
              ${
                isDark
                  ? "bg-white/10 border-white/10 shadow-black/50"
                  : "bg-white/60 border-black/5 shadow-xl shadow-black/5"
              }`}
            >
              <div>
                <p
                  className={`text-[7px] md:text-[8px] uppercase tracking-widest font-bold
                  ${isDark ? "text-neutral-500" : "text-slate-400"}`}
                >
                  Current Focus
                </p>
                <p
                  className={`text-[9px] md:text-[10px] font-bold font-headline
                  ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  MERN STACK DEVELOPER
                </p>
              </div>
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-cyan-400/20 flex items-center justify-center shrink-0 ml-2">
                <span
                  className="material-symbols-outlined text-cyan-500"
                  style={{ fontSize: "12px" }}
                >
                  <CgBolt />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
