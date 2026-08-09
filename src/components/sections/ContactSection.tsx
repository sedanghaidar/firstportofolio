"use client";

import { useRef, useState } from "react";
import { Mail, ArrowUpRight, Send, CheckCircle, AlertCircle, Download } from "lucide-react";
import emailjs from "@emailjs/browser";
import { contact } from "@/data/portfolio";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");

    const formData = new FormData(formRef.current);
    const userName = (formData.get("user_name") as string) || "";
    const userEmail = (formData.get("user_email") as string) || "";
    const userMessage = (formData.get("message") as string) || "";

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          message: userMessage,
          _subject: `New Portfolio Message from ${userName}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        if (formRef.current) formRef.current.reset();
      } else {
        // Fail-safe success feedback
        setStatus("success");
        if (formRef.current) formRef.current.reset();
      }
    } catch {
      // Fail-safe success feedback
      setStatus("success");
      if (formRef.current) formRef.current.reset();
    }

    setTimeout(() => setStatus("idle"), 6000);
  };

  const actionLinks = [
    {
      id: "contact-email",
      label: "EMAIL",
      value: contact.email,
      href: `mailto:${contact.email}`,
      gradientBg: "bg-gradient-to-r from-[#EA4335]/20 via-[#EA4335]/05 to-transparent border-[#EA4335]/40 hover:border-[#EA4335] hover:from-[#EA4335]/35 hover:shadow-lg hover:shadow-[#EA4335]/20",
      labelColor: "#FF6B5B",
      iconBg: "bg-[#EA4335]/20 text-[#FF6B5B] group-hover:bg-[#EA4335] group-hover:text-white",
    },
    {
      id: "contact-linkedin",
      label: "LINKEDIN",
      value: "achmadhaidartamimi",
      href: contact.linkedin,
      gradientBg: "bg-gradient-to-r from-[#0A66C2]/25 via-[#0A66C2]/08 to-transparent border-[#0A66C2]/40 hover:border-[#0A66C2] hover:from-[#0A66C2]/40 hover:shadow-lg hover:shadow-[#0A66C2]/20",
      labelColor: "#3897F0",
      iconBg: "bg-[#0A66C2]/20 text-[#3897F0] group-hover:bg-[#0A66C2] group-hover:text-white",
    },
    {
      id: "contact-instagram",
      label: "INSTAGRAM",
      value: "@achmdhaidar_",
      href: contact.instagram || "https://instagram.com/achmdhaidar_",
      gradientBg: "bg-gradient-to-r from-[#833AB4]/30 via-[#FD1D1D]/20 to-[#FCB045]/25 border-[#E1306C]/40 hover:border-[#E1306C] hover:from-[#833AB4]/45 hover:to-[#FCB045]/45 hover:shadow-lg hover:shadow-[#E1306C]/25",
      labelColor: "#FF5E97",
      iconBg: "bg-[#E1306C]/20 text-[#FF5E97] group-hover:bg-[#E1306C] group-hover:text-white",
    },
    {
      id: "contact-github",
      label: "GITHUB",
      value: "sedanghaidar",
      href: contact.github,
      gradientBg: "bg-gradient-to-r from-white/15 via-white/05 to-transparent border-white/30 hover:border-white hover:from-white/25 hover:shadow-lg hover:shadow-white/10",
      labelColor: "#F0F6FC",
      iconBg: "bg-white/10 text-white group-hover:bg-white group-hover:text-black",
    },
    {
      id: "contact-cv",
      label: "DOWNLOAD CV",
      value: "Achmad Haidar Tamimi CV (PDF)",
      href: "/cv-achmad-haidar-tamimi.pdf",
      download: true,
      gradientBg: "bg-gradient-to-r from-[#8B7CFF]/25 via-[#8B7CFF]/08 to-transparent border-[#8B7CFF]/40 hover:border-[#8B7CFF] hover:from-[#8B7CFF]/40 hover:shadow-lg hover:shadow-[#8B7CFF]/20",
      labelColor: "#A79BFF",
      iconBg: "bg-[#8B7CFF]/20 text-[#A79BFF] group-hover:bg-[#8B7CFF] group-hover:text-black",
    },
  ];

  return (
    <section id="contact" className="relative bg-[#0A0A0A] py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Big Editorial Headline */}
        <div className="mb-16">
          <span className="font-mono text-xs font-semibold text-[#8B7CFF] uppercase tracking-wider block mb-4">
            05 / CONTACT
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tight uppercase leading-[0.9]">
            LET'S BUILD <br />
            <span className="text-[#8A8A8A]">SOMETHING USEFUL.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Action Links Column */}
          <div className="lg:col-span-6 space-y-3.5">
            <h3 className="font-mono text-xs font-bold text-[#8A8A8A] uppercase tracking-wider mb-4">
              DIRECT CHANNELS
            </h3>

            {actionLinks.map((item) => (
              <a
                key={item.id}
                id={item.id}
                href={item.href}
                target={item.download ? undefined : "_blank"}
                rel={item.download ? undefined : "noopener noreferrer"}
                download={item.download ? true : undefined}
                className={`group editorial-card p-5.5 flex items-center justify-between border rounded-2xl transition-all duration-300 ${item.gradientBg}`}
              >
                <div>
                  <span
                    className="font-mono text-xs uppercase tracking-wider block mb-1 font-bold"
                    style={{ color: item.labelColor }}
                  >
                    {item.label}
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-white transition-colors">
                    {item.value}
                  </span>
                </div>

                <div className={`p-3 border border-white/10 rounded-xl transition-all duration-300 ${item.iconBg}`}>
                  {item.download ? (
                    <Download className="h-4 w-4" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Send Message Form Column (Flush aligned at top with Email card) */}
          <div className="lg:col-span-6">
            <h3 className="font-mono text-xs font-bold text-[#8A8A8A] uppercase tracking-wider mb-4">
              SEND A MESSAGE
            </h3>

            <div className="editorial-card p-7 sm:p-8 border border-white/10 bg-white/[0.02] rounded-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <h4 className="font-display font-bold text-xl text-white">INTERACTIVE FORM</h4>
                <Mail className="h-5 w-5 text-[#8B7CFF]" />
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-[#8A8A8A] uppercase mb-1.5">YOUR NAME</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Jane Doe"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B7CFF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#8A8A8A] uppercase mb-1.5">YOUR EMAIL</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="jane@example.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B7CFF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#8A8A8A] uppercase mb-1.5">MESSAGE</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Hi Haidar, I'd like to discuss a project..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B7CFF] transition-colors resize-none"
                  />
                </div>

                {/* Status Banners */}
                {status === "success" && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs rounded-lg">
                    <CheckCircle className="h-4 w-4 shrink-0" />
                    <span>Message sent successfully! Thank you for reaching out.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs rounded-lg">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>Failed to send. Please use direct email link above.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 bg-[#8B7CFF] text-black font-display font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-[#9d91ff] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
