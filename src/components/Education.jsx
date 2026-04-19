import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  HiOutlineExternalLink,
  HiAcademicCap,
  HiBriefcase,
} from "react-icons/hi";

const educationData = [
  {
    degree: "B.E. Computer Science",
    institution: "RVS School of Engineering",
    duration: "2022 – 2026",
    grade: "CGPA: 8.5",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Sivakasi Nadar Matriculation School",
    duration: "2020 – 2022",
    grade: "PERCENTAGE: 77.8%",
  },
  {
    degree: "SSLC (10th)",
    institution: "St. Joseph Higher Secondary School",
    duration: "2019 – 2020",
    grade: "PERCENTAGE: 81.4%",
  },
];

const experienceData = [
  {
    role: "MERN STACK DEVELOPER",
    company: "SDLC Center",
    duration: "6 Months • On-site",
    isHighlight: true,
    certificateUrl: "/Sdlc.JPG",
  },
  {
    role: "Full Stack Intern",
    company: "Elevance Skills",
    duration: "1 Month • Remote",
    certificates: [
      { name: "Training Certificate", url: "/Elevance.png" },
      { name: "Intern Excellence", url: "/Elevance Intern.png" },
    ],
  },
  {
    role: "Web Dev Intern",
    company: "Futurik Technologies",
    duration: "1 Month • On-site",
    certificateUrl: "/Futurix.png",
  },
  {
    role: "Networks Intern",
    company: "Phoenix Softech",
    duration: "1 Month • On-site",
    certificateUrl: "/Phoenix.png",
  },
];

export default function Education() {
  const { isDark } = useTheme();

  return (
    <section
      id="education"
      className={`min-h-[80vh] px-6 py-20 flex flex-col items-center transition-colors duration-500 ${
        isDark ? "bg-[#0e0e0e] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-black font-headline bg-clip-text text-transparent uppercase tracking-tighter ${
              isDark
                ? "bg-linear-to-r from-cyan-400 to-cyan-700"
                : "bg-linear-to-r from-cyan-600 to-blue-800"
            }`}
          >
            Timeline
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">
              <HiBriefcase className="text-lg" /> Experience & Training
            </h3>
            <div className="flex flex-col gap-4">
              {experienceData.map((exp, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-2xl border flex items-center justify-between transition-all group ${
                    exp.isHighlight
                      ? "border-cyan-500 bg-cyan-500/5 ring-1 ring-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                      : isDark
                        ? "bg-white/5 border-white/10"
                        : "bg-white border-black/5 shadow-sm"
                  }`}
                >
                  <div>
                    <h4
                      className={`font-bold ${exp.isHighlight ? "text-cyan-400" : "text-base"}`}
                    >
                      {exp.role} {exp.isHighlight && "⭐"}
                    </h4>
                    <p
                      className={`text-xs ${isDark ? "text-neutral-500" : "text-slate-500"}`}
                    >
                      {exp.company} • {exp.duration}
                    </p>
                  </div>

                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors flex items-center justify-center cursor-pointer"
                      title="View Certificate"
                    >
                      <HiOutlineExternalLink />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">
              <HiAcademicCap className="text-lg" /> Academic History
            </h3>
            <div
              className={`rounded-3xl border divide-y ${
                isDark
                  ? "bg-white/5 border-white/10 divide-white/5"
                  : "bg-white border-black/5 divide-slate-100 shadow-sm"
              }`}
            >
              {educationData.map((edu, i) => (
                <div
                  key={i}
                  className="p-6 transition-colors hover:bg-cyan-500/5"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-base leading-tight">
                      {edu.degree}
                    </h4>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase">
                      {edu.duration}
                    </span>
                  </div>
                  <p
                    className={`text-xs mb-2 ${isDark ? "text-neutral-400" : "text-slate-600"}`}
                  >
                    {edu.institution}
                  </p>
                  <span className="text-xs font-black text-cyan-500 tracking-wider">
                    {edu.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
