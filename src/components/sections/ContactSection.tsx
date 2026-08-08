"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { contact } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export function ContactSection() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const socialLinks = [
    {
      id: "contact-email",
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      bgColor: "bg-neo-red",
    },
    {
      id: "contact-linkedin",
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "achmadhaidartamimi",
      href: contact.linkedin,
      bgColor: "bg-neo-blue",
    },
    {
      id: "contact-whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+62-812-1568-3231",
      href: contact.whatsapp,
      bgColor: "bg-neo-lime",
    },
    {
      id: "contact-github",
      icon: GithubIcon,
      label: "GitHub",
      value: "achmadhaidartamimi",
      href: contact.github,
      bgColor: "bg-neo-yellow",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-neo-pink py-24 px-6 lg:px-8 border-b-4 border-black"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-block bg-white px-8 py-4 border-4 border-black shadow-[6px_6px_0_0_#000] mb-6 rotate-1">
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase">
              Get In Touch
            </h2>
          </div>
          <p className="mt-4 text-xl font-bold text-black max-w-2xl mx-auto bg-neo-yellow p-4 neo-border shadow-[4px_4px_0_0_#000] -rotate-1">
            Tertarik untuk berkolaborasi atau punya pertanyaan? Saya terbuka
            untuk peluang baru dan diskusi menarik.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn flex items-center gap-6 bg-white p-4 group"
                >
                  <div
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center border-3 border-black shadow-[3px_3px_0_0_#000] group-hover:-translate-y-1 group-hover:shadow-[5px_5px_0_0_#000] transition-all",
                      link.bgColor
                    )}
                  >
                    <Icon className="h-6 w-6 text-black stroke-[3]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-black uppercase tracking-widest text-neutral-500 mb-1">
                      {link.label}
                    </p>
                    <p className="text-lg font-black text-black truncate group-hover:underline decoration-4 underline-offset-4">
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="neo-card bg-neo-cyan p-8 md:p-10 shadow-[8px_8px_0_0_#000]"
            >
              <h3 className="mb-8 text-3xl font-black text-black uppercase bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_#000] -rotate-2">
                Kirim Pesan
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-form-name"
                    className="mb-2 block text-sm font-black uppercase tracking-widest text-black"
                  >
                    Nama
                  </label>
                  <input
                    id="contact-form-name"
                    type="text"
                    name="user_name"
                    required
                    placeholder="Nama Anda"
                    className="w-full neo-input bg-white p-4 text-base font-bold text-black placeholder:text-neutral-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-form-email"
                    className="mb-2 block text-sm font-black uppercase tracking-widest text-black"
                  >
                    Email
                  </label>
                  <input
                    id="contact-form-email"
                    type="email"
                    name="user_email"
                    required
                    placeholder="email@contoh.com"
                    className="w-full neo-input bg-white p-4 text-base font-bold text-black placeholder:text-neutral-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-form-message"
                    className="mb-2 block text-sm font-black uppercase tracking-widest text-black"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="contact-form-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full resize-none neo-input bg-white p-4 text-base font-bold text-black placeholder:text-neutral-400"
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 border-4 border-black bg-neo-lime p-4 text-base font-black text-black shadow-[4px_4px_0_0_#000]"
                  >
                    <CheckCircle className="h-6 w-6 shrink-0 stroke-[3]" />
                    Pesan berhasil dikirim!
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 border-4 border-black bg-neo-red p-4 text-base font-black text-black shadow-[4px_4px_0_0_#000]"
                  >
                    <AlertCircle className="h-6 w-6 shrink-0 stroke-[3]" />
                    Gagal mengirim. Coba via email.
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  id="contact-form-submit"
                  type="submit"
                  disabled={status === "loading"}
                  className="neo-btn flex w-full items-center justify-center gap-3 bg-neo-yellow px-8 py-5 text-xl font-black text-black hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-6 w-6 rounded-full border-4 border-black/30 border-t-black"
                      />
                      MENGIRIM...
                    </>
                  ) : (
                    <>
                      <Send className="h-6 w-6 stroke-[3]" />
                      KIRIM PESAN
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
