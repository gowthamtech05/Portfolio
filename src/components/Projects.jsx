import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { ExternalLink, CheckCircle2, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Project1 from "../assets/Neomart.png";
import Project2 from "../assets/Stack.png";

const projectData = [
  {
    id: "01",
    title: "Neomart - Dynamic Pricing",
    category: "Full Stack Development",
    description:
      "A scalable MERN e-commerce platform featuring a specialized pricing engine for loyalty-based discounts and admin-controlled flash sales.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Razorpay", "Cloudinary"],
    features: [
      "Rule-based dynamic pricing logic",
      "Secure Razorpay payment integration",
      "Admin dashboard with real-time analytics",
    ],
    image: Project1,
    github: "https://github.com/gowthamtech05/Neomart-ecommerce",
    live: "https://neomart-ecommerce.vercel.app/",
    download: "/docs/neomart-report.pdf",
  },
  {
    id: "02",
    title: "Stack Overflow Clone",
    category: "Web Ecosystem",
    description:
      "A community Q&A platform with secure JWT authentication, OTP email verification, and reputation-based posting limits.",
    tech: ["React", "Node.js", "JWT", "Nodemailer", "Bcrypt", "i18next"],
    features: [
      "OTP-based secure verification",
      "Multilingual support (i18n)",
      "Role-based API access control",
    ],
    image: Project2,
    github: "https://github.com/gowthamtech05/Stack-Overflow-Clone",
    live: "https://stack-overflow-updated.vercel.app/",
    download: "/docs/stackoverflow-report.pdf",
  },
];

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="projects"
      className={`py-16 md:py-24 px-6 transition-colors duration-500 ${
        isDark ? "bg-[#0e0e0e] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="mb-4">
            <h2
              className={`text-3xl md:text-5xl font-black font-headline uppercase tracking-tighter bg-clip-text text-transparent ${
                isDark
                  ? "bg-linear-to-r from-cyan-400 to-blue-500"
                  : "bg-linear-to-r from-cyan-600 to-blue-800"
              }`}
            >
              Featured Projects
            </h2>
            <div className="h-1 w-12 bg-cyan-500 mt-2 rounded-full" />
          </div>
          <p
            className={`max-w-xl text-base md:text-lg font-medium leading-relaxed ${
              isDark ? "text-neutral-400" : "text-slate-500"
            }`}
          >
            Building robust full-stack solutions with modern architecture.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              
              <div
                className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                    isDark
                      ? "border-white/10 bg-white/5 shadow-xl shadow-cyan-900/10"
                      : "border-slate-200 bg-white shadow-lg shadow-slate-200"
                  }`}
                >
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top origin-top scale-[1.15] group-hover:scale-125 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm">
                    <a
                      href={project.live}
                      className="p-2.5 bg-cyan-500 rounded-full text-black hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                  <div
                    className={`h-px grow ${isDark ? "bg-white/10" : "bg-slate-200"}`}
                  />
                </div>

                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                  {project.title}
                </h3>

                <p
                  className={`mb-6 leading-relaxed text-sm font-medium italic border-l-4 border-cyan-500 pl-4 ${
                    isDark ? "text-neutral-400" : "text-slate-500"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider border transition-colors ${
                        isDark
                          ? "bg-white/5 border-white/10 text-neutral-400"
                          : "bg-slate-100 border-slate-200 text-slate-500"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    className="px-5 py-2.5 bg-cyan-500 text-black font-black uppercase text-[10px] tracking-widest rounded-lg shadow-md shadow-cyan-500/10 hover:-translate-y-px active:scale-95 transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className={`px-5 py-2.5 border font-black uppercase text-[10px] tracking-widest rounded-lg flex items-center gap-2 transition-all ${
                      isDark
                        ? "border-white/10 hover:bg-white/5 text-white"
                        : "border-slate-200 hover:bg-slate-100 text-slate-900"
                    }`}
                  >
                    <SiGithub size={16} />
                    Code
                  </a>
                  <a
                    href={project.download}
                    download
                    className={`px-5 py-2.5 border-2 border-dashed font-black uppercase text-[10px] tracking-widest rounded-lg flex items-center gap-2 transition-all ${
                      isDark
                        ? "border-cyan-500/20 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5"
                        : "border-cyan-500/30 text-cyan-600 hover:border-cyan-500/60 hover:bg-cyan-50"
                    }`}
                  >
                    <FileText size={16} />
                    Report
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
