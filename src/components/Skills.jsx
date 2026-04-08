import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

import {
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiVercel,
  SiRender,
  SiMysql,
  SiPostman,
  SiGithub,
  SiHtml5,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import {
  ChevronDown,
  Code2,
  Layers,
  Database,
  ShieldCheck,
  Cpu,
  Lock,
  Mail,
  Cookie,
  Zap,
} from "lucide-react";

const allIcons = [
  { icon: <SiHtml5 />, color: "#E34F26", label: "HTML5" },
  { icon: <DiCss3 />, color: "#1572B6", label: "CSS3" },
  { icon: <SiJavascript />, color: "#F7DF1E", label: "JS" },
  { icon: <SiReact />, color: "#61DAFB", label: "React" },
  { icon: <SiTailwindcss />, color: "#06B6D4", label: "Tailwind" },
  { icon: <SiNodedotjs />, color: "#339933", label: "Node.js" },
  { icon: <SiMongodb />, color: "#47A248", label: "MongoDB" },
  { icon: <SiMysql />, color: "#4479A1", label: "MySQL" },
  { icon: <SiPostman />, color: "#FF6C37", label: "Postman" },
  { icon: <SiGithub />, color: "#8b8b8b", label: "GitHub" },
];

function FloatingTechStrip({ isDark }) {
  const [visibleIcons, setVisibleIcons] = useState(allIcons);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleIcons(allIcons.filter((_, i) => [0, 2, 3, 5, 7].includes(i)));
      } else if (width < 1024) {
        setVisibleIcons(allIcons.slice(0, 8));
      } else {
        setVisibleIcons(allIcons);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full mb-2 overflow-scroll"
      style={{ height: 160 }}
    >
      {visibleIcons.map((tech, i) => (
        <FloatingOrb
          key={tech.label}
          tech={tech}
          index={i}
          total={visibleIcons.length}
          isDark={isDark}
        />
      ))}
    </div>
  );
}

function FloatingOrb({ tech, index, total, isDark }) {
  const delay = index * 0.4;
  const duration = 3 + (index % 3);
  const xBase = (index / (total - 1)) * 88 + 6;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [10, -20, 10] }}
      style={{
        position: "absolute",
        left: `${xBase}%`,
        top: "45%",
        transform: "translateX(-50%) translateY(-50%)",
      }}
      transition={{
        y: { duration, delay, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2, y: -5 }}
        className="flex flex-col items-center gap-2 cursor-default"
      >
        <div
          className="relative flex items-center justify-center rounded-2xl"
          style={{
            width: 52,
            height: 52,
            background: isDark
              ? `radial-gradient(circle at 35% 35%, ${tech.color}33, ${tech.color}11)`
              : `radial-gradient(circle at 35% 35%, ${tech.color}22, ${tech.color}08)`,
            border: `1.5px solid ${tech.color}55`,
            boxShadow: `0 4px 20px ${tech.color}30`,
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
            style={{ border: `1px solid ${tech.color}88` }}
          />
          <span style={{ fontSize: 24, color: tech.color, lineHeight: 1 }}>
            {tech.icon}
          </span>
        </div>
        <span
          className="text-[10px] font-bold uppercase tracking-widest text-center"
          style={{ color: tech.color, opacity: 0.8, width: "50px" }}
        >
          {tech.label}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const { isDark } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const categories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-orange-500" />,
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <DiCss3 className="text-[#1572B6]" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#F7DF1E]" />,
        },
        { name: "React JS", icon: <SiReact className="text-[#61DAFB]" /> },
      ],
    },
    {
      title: "Frameworks & Styling",
      icon: <Layers className="w-5 h-5 text-cyan-500" />,
      skills: [
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      ],
    },
    {
      title: "Backend & Logic",
      icon: <Database className="w-5 h-5 text-green-500" />,
      skills: [
        { name: "Node JS", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express JS", icon: <SiExpress className="text-current" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      ],
    },
    {
      title: "Tools & Deployment",
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      skills: [
        { name: "Github", icon: <SiGithub className="text-current" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "Vercel", icon: <SiVercel className="text-current" /> },
        { name: "Render", icon: <SiRender className="text-[#46E3B7]" /> },
      ],
    },
  ];

  return (
    <motion.section
      layout
      id="skills"
      className={`py-20 px-6 transition-colors duration-500 ${
        isDark ? "bg-[#0e0e0e] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-4xl mx-auto" ref={dropdownRef}>
        <div className="mb-4">
          <h2
            className={`text-4xl md:text-5xl font-black font-headline uppercase tracking-tighter bg-clip-text text-transparent ${isDark ? "bg-linear-to-r from-cyan-400 to-blue-500" : "bg-linear-to-r from-cyan-600 to-blue-800"}`}
          >
            SKILLS I HAVE
          </h2>
          <div className="h-1 w-12 bg-cyan-500 mt-2" />
        </div>

        <FloatingTechStrip isDark={isDark} />

        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className={`w-full group flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${
            showDropdown
              ? "bg-cyan-500 border-cyan-400 text-black shadow-lg"
              : isDark
                ? "bg-white/5 border-white/10"
                : "bg-white border-slate-200 shadow-sm"
          }`}
        >
          <div className="flex items-center gap-4">
            <Cpu
              className={`w-6 h-6 ${showDropdown ? "text-black" : "text-cyan-500"}`}
            />
            <span className="font-bold uppercase tracking-widest text-sm">
              {showDropdown
                ? "Hide Full Technical Stack"
                : "View All Skills & Frameworks"}
            </span>
          </div>
          <motion.div animate={{ rotate: showDropdown ? 180 : 0 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>

        <AnimatePresence>
          {showDropdown && (
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mt-6 space-y-4 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border ${isDark ? "bg-white/3 border-white/5" : "bg-white border-slate-100 shadow-sm"}`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2 rounded-lg bg-cyan-500/10">
                        {cat.icon}
                      </div>
                      <h3 className="text-xs font-black uppercase tracking-widest text-cyan-500">
                        {cat.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                      {cat.skills.map((skill, si) => (
                        <div key={si} className="flex items-center gap-3 group">
                          <span className="text-2xl group-hover:scale-110 transition-transform">
                            {skill.icon}
                          </span>
                          <span
                            className={`text-sm font-semibold tracking-tight transition-opacity ${isDark ? "text-neutral-400 group-hover:text-white" : "text-slate-500 group-hover:text-slate-900"}`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={`p-8 rounded-2xl border border-dashed ${isDark ? "border-white/10 bg-black/20" : "border-slate-200 bg-slate-50"}`}
              >
                <p
                  className={`text-xs font-black uppercase tracking-widest text-center mb-6 ${isDark ? "text-neutral-500" : "text-slate-400"}`}
                >
                  Backend Security & Protocols
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <ProtocolItem
                    icon={<Lock className="w-5 h-5 text-green-500" />}
                    label="Bcrypt"
                  />
                  <ProtocolItem
                    icon={<ShieldCheck className="w-5 h-5 text-cyan-500" />}
                    label="HMAC"
                  />
                  <ProtocolItem
                    icon={<Cookie className="w-5 h-5 text-orange-500" />}
                    label="Secure Cookies"
                  />
                  <ProtocolItem
                    icon={<Mail className="w-5 h-5 text-blue-400" />}
                    label="Nodemailer"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function ProtocolItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity">
      {icon}
      <span className="text-sm font-bold uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
