import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { CgBolt } from "react-icons/cg";
import { IoPerson } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { PiGraduationCapBold } from "react-icons/pi";

const navLinks = [
  { name: "About", href: "#about", icon: <IoPerson /> },
  { name: "Skills", href: "#skills", icon: <CgBolt /> },
  { name: "Education", href: "#education", icon: <PiGraduationCapBold /> },
  { name: "Projects", href: "#projects", icon: <VscVscode /> },
  { name: "Contact", href: "#contact", icon: <CiMail /> },
];

function scrollToSection(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-16 flex items-center border-b ${
          isDark
            ? "bg-black/80 border-white/10 text-white"
            : "bg-white/90 border-black/5 text-slate-900"
        } backdrop-blur-md shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className={`md:hidden p-2 rounded-full transition-all text-xl ${
                isDark
                  ? "text-cyan-400 hover:bg-white/10"
                  : "text-cyan-600 hover:bg-black/5"
              }`}
            >
              <IoIosMenu />
            </button>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`text-2xl font-bold tracking-tighter font-['Syne'] bg-clip-text text-transparent ${
                isDark
                  ? "bg-linear-to-r from-cyan-400 to-cyan-700"
                  : "bg-linear-to-r from-cyan-600 to-blue-800"
              }`}
            >
              Let’s Connect
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`text-sm font-semibold tracking-wide transition-all duration-200 relative group ${
                  isDark
                    ? "text-neutral-400 hover:text-cyan-400"
                    : "text-slate-500 hover:text-cyan-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 group-hover:w-full w-0 ${
                    isDark ? "bg-cyan-400" : "bg-cyan-600"
                  }`}
                />
              </a>
            ))}
          </nav>

          <button
            onClick={toggle}
            className={`p-2.5 rounded-full border transition-all text-xl ${
              isDark
                ? "bg-white/5 border-white/10 text-cyan-400 hover:bg-white/10"
                : "bg-black/5 border-black/5 text-cyan-700 hover:bg-black/10"
            }`}
          >
            {isDark ? <MdOutlineLightMode /> : <MdLightMode />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-72 z-70 border-r transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isDark ? "bg-[#131313] border-white/10" : "bg-white border-black/5"}`}
      >
        <div className="p-8 flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }}
              className={`text-2xl font-bold font-['Syne'] bg-clip-text text-transparent ${
                isDark
                  ? "bg-linear-to-r from-cyan-400 to-cyan-700"
                  : "bg-linear-to-r from-cyan-600 to-blue-800"
              }`}
            >
              Gowtham
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className={`text-xl ${isDark ? "text-neutral-400" : "text-slate-500"}`}
            >
              <IoIosClose />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`flex items-center gap-4 p-4 rounded-xl font-medium transition-all text-sm ${
                  isDark
                    ? "text-neutral-400 hover:bg-white/5 hover:text-cyan-400"
                    : "text-slate-600 hover:bg-black/5 hover:text-cyan-700"
                }`}
              >
                <span className="text-base">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
