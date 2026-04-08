import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Send,
  Loader2,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_135zwoq",
        "template_owm0f8g",
        formRef.current,
        "t_BwoM_uJTfhmUz3x",
      )
      .then(
        () => {
          alert("Message sent successfully! 🚀");
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Something went wrong. Please try again.");
          setIsSending(false);
        },
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "gowthamtech05@gmail.com",
      link: "mailto:gowthamtech05@gmail.com",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Phone",
      value: "+91 6379167750",
      link: "tel:+916379167750",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Location",
      value: "Madurai, Tamil Nadu",
      link: "https://www.google.com/maps/search/Madurai,+Tamil+Nadu",
    },
  ];

  const socials = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/malayappa-gowtham05",
    },
    {
      icon: <SiGithub className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/gowthamtech05",
    },
    { icon: <ExternalLink className="w-5 h-5" />, name: "Portfolio", url: "#" },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 min-h-[80vh] flex items-center bg-[#131313] text-[#e5e2e1] font-body"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter uppercase leading-none">
            Let's Connect
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#1c1b1b] rounded-xl p-6 md:p-8 border border-white/5 shadow-xl">
              <form ref={formRef} className="space-y-5" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">
                      Name
                    </label>
                    <input
                      name="from_name"
                      required
                      className="w-full bg-[#2a2a2a] border-none rounded-lg p-3.5 text-sm text-white focus:ring-1 focus:ring-cyan-500/50 transition-all outline-none"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">
                      Email
                    </label>
                    <input
                      name="user_email"
                      required
                      className="w-full bg-[#2a2a2a] border-none rounded-lg p-3.5 text-sm text-white focus:ring-1 focus:ring-cyan-500/50 transition-all outline-none"
                      placeholder="hello@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="w-full bg-[#2a2a2a] border-none rounded-lg p-3.5 text-sm text-white focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none outline-none"
                    placeholder="How Can I Help You..."
                    rows="4"
                  ></textarea>
                </div>
                <button
                  disabled={isSending}
                  className="w-full md:w-auto px-8 py-3 bg-cyan-500 text-black font-bold uppercase text-[11px] tracking-widest rounded-lg hover:bg-cyan-400 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                  type="submit"
                >
                  {isSending ? (
                    <Loader2 className="animate-spin" size={14} />
                  ) : (
                    <Send size={14} />
                  )}
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-[#1c1b1b] rounded-xl p-6 border border-white/5 space-y-8">
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <a
                      key={idx}
                      href={info.link}
                      target={info.label === "Location" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-[9px] text-neutral-500 uppercase font-bold">
                          {info.label}
                        </p>
                        <p className="text-sm text-neutral-200 group-hover:text-cyan-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-white/5"></div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Socials
                </h3>
                <div className="flex gap-3">
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-lg bg-[#2a2a2a] flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border hover:border-cyan-400/30 transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <motion.a
              href="docs/resume.pdf"
              download="Malayappa_Gowtham_Resume.pdf"
              whileHover={{ y: -2 }}
              className="w-full flex items-center justify-between p-5 bg-[#2a2a2a] rounded-xl border border-cyan-400/10 group hover:bg-cyan-400/5 transition-all cursor-pointer"
            >
              <div className="text-left">
                <p className="text-[9px] font-bold uppercase text-cyan-400">
                  For More Information
                </p>
                <p className="text-base font-bold text-white">
                  Download Resume
                </p>
              </div>
              <Download className="text-cyan-400" size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
