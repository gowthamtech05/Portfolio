import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  HiOutlineExternalLink,
  HiAcademicCap,
  HiBriefcase,
  HiX,
} from "react-icons/hi";

function CertModal({ urls, label, onClose }) {
  if (!urls || urls.length === 0) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-white/10 w-full max-w-lg overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10">
          <span className="text-sm font-semibold">{label} — Certificates</span>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <HiX className="text-lg" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[70vh] flex flex-col gap-4 p-4">
          {urls.map((url, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                Certificate {idx + 1}
              </p>
              <img
                src={url}
                alt={`${label} Certificate ${idx + 1}`}
                className="w-full rounded-xl border border-black/10 dark:border-white/10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
    certificateUrl: ["/Elevance.png", "/Elevance Intern.png"],
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
  const [modal, setModal] = useState(null);
  const openCert = (exp) => {
    const urls = Array.isArray(exp.certificateUrl)
      ? exp.certificateUrl
      : [exp.certificateUrl];
    setModal({ urls, label: exp.company });
  };

  return (
    <section
      id="education"
      className={`min-h-[80vh] px-6 py-20 flex flex-col items-center transition-colors duration-500 ${
        isDark ? "bg-[#0e0e0e] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {modal && (
        <CertModal
          urls={modal.urls}
          label={modal.label}
          onClose={() => setModal(null)}
        />
      )}

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
                    <button
                      onClick={() => openCert(exp)}
                      className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors flex items-center justify-center cursor-pointer"
                      title="View Certificate"
                    >
                      <HiOutlineExternalLink />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
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
