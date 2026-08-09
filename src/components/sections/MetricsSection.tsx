"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Brain, Lightbulb, Users, FileCheck, ShieldCheck, BookOpen, Workflow } from "lucide-react";

// Varied Organic Flower Divider Icons (4 distinct flower shapes)
function FlowerDividerIcon({ index = 0, className }: { index?: number; className?: string }) {
  const type = index % 4;
  switch (type) {
    case 0:
      // 8-Petal Daisy Blossom
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 2C10.895 2 10 3.343 10 5C10 6.657 10.895 8 12 8C13.105 8 14 6.657 14 5C14 3.343 13.105 2 12 2Z" />
          <path d="M12 16C10.895 16 10 17.343 10 19C10 20.657 10.895 22 12 22C13.105 22 14 20.657 14 19C14 17.343 13.105 16 12 16Z" />
          <path d="M2 12C2 10.895 3.343 10 5 10C6.657 10 8 10.895 8 12C8 13.105 6.657 14 5 14C3.343 14 2 13.105 2 12Z" />
          <path d="M16 12C16 10.895 17.343 10 19 10C20.657 10 22 10.895 22 12C22 13.105 20.657 14 19 14C17.343 14 16 13.105 16 12Z" />
          <path d="M4.929 4.929C4.148 5.71 5.099 7.371 6.272 8.544C7.445 9.717 9.106 10.668 9.887 9.887C10.668 9.106 9.717 7.445 8.544 6.272C7.371 5.099 5.71 4.148 4.929 4.929Z" />
          <path d="M14.113 14.113C13.332 14.894 14.283 16.555 15.456 17.728C16.629 18.901 18.29 19.852 19.071 19.071C19.852 18.29 18.901 16.629 17.728 15.456C16.555 14.283 14.894 13.332 14.113 14.113Z" />
          <path d="M19.071 4.929C18.29 4.148 16.629 5.099 15.456 6.272C14.283 7.445 13.332 9.106 14.113 9.887C14.894 10.668 16.555 9.717 17.728 8.544C18.901 7.371 19.852 5.71 19.071 4.929Z" />
          <path d="M4.929 19.071C5.71 19.852 7.371 18.901 8.544 17.728C9.717 16.555 10.668 14.894 9.887 14.113C9.106 13.332 7.445 14.283 6.272 15.456C5.099 16.629 4.148 18.29 4.929 19.071Z" />
        </svg>
      );
    case 1:
      // Organic Smooth 4-Point Star Flower
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
      );
    case 2:
      // 6-Petal Asterisk Flower
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 1.5v5m0 11v5M2.8 6.8l4.3 2.5M16.9 14.7l4.3 2.5M2.8 17.2l4.3-2.5M16.9 9.3l4.3-2.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    default:
      // 4-Petal Soft Organic Bloom
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2a4 4 0 0 1 4 4c0 1.6-1 3-2.4 3.6C15 11 16.4 12 18 12a4 4 0 0 1 0 8c-1.6 0-3-1-3.6-2.4C13 19 12 20.4 12 22a4 4 0 0 1-8 0c0-1.6 1-3 2.4-3.6C5 17 3.6 16 2 16a4 4 0 0 1 0-8c1.6 0 3 1 3.6 2.4C7 9 8.4 7.6 10 7.6A4 4 0 0 1 12 2z" />
        </svg>
      );
  }
}

// Skill Authentic SVG Logos
function SkillLogo({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  switch (name) {
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M13.4 12.1h2.2v1.5h-2.2v4.9H11.7v-4.9H9.5v-1.5h3.9zM18.8 14.5c0-.6-.3-1-1.1-1.3l-1-.4c-.5-.2-.7-.4-.7-.7 0-.3.3-.5.8-.5.6 0 1 .3 1.1.9h1.7c-.1-1.2-1.1-2.1-2.8-2.1-1.7 0-2.6.9-2.6 2 0 .7.4 1.2 1.2 1.5l.9.3c.6.2.8.5.8.8 0 .4-.4.6-1 .6-.8 0-1.2-.4-1.3-1.1h-1.7c.1 1.5 1.1 2.3 3 2.3 1.9.1 2.8-.8 2.8-2.3z" fill="#FFF" />
        </svg>
      );
    case "React":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 180 180" className={className}>
          <circle cx="90" cy="90" r="90" fill="#000"/>
          <path d="M149.5 147.5L72.2 48H56v84h14.5V71l63.5 82.2a90.4 90.4 0 0015.5-5.7z" fill="#FFF"/>
          <rect x="110" y="48" width="14.5" height="84" fill="#FFF"/>
        </svg>
      );
    case "Flutter":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#47C5FB" d="M14.314 0L2.3 12 6 15.7 21.686 0z"/>
          <path fill="#02569B" d="M14.314 24l7.372-7.371L14.314 9.257l-7.371 7.372z"/>
          <path fill="#0175C2" d="M9.83 18.914l3.685 3.686 7.372-7.372-3.686-3.685z"/>
        </svg>
      );
    case "TailwindCSS":
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#06B6D4" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      );
    case "HTML/CSS":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.97 24l-8.608-2.437z"/>
          <path fill="#EF652A" d="M12 2.175v19.587l6.883-1.95L20.47 2.175z"/>
          <path fill="#FFF" d="M12 9.575H8.085L7.81 6.51H12V3.795H4.725l.825 9.255H12zm0 6.645l-3.375-.915-.225-2.52H5.685l.435 4.89 5.88 1.635z"/>
        </svg>
      );
    case "Laravel":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#FF2D20" d="M23.6 15.6l-5.6 3.3v-6.5l5.6-3.2v6.4zm-6.6 3.9l-5.6-3.3v-6.4l5.6 3.3v6.4zM16 6.3L10.4 3 4.8 6.3v6.4l5.6 3.3 5.6-3.3V6.3zm-6.6-2.3l4.6 2.7-4.6 2.7-4.6-2.7 4.6-2.7zM4 7.2v6l-3.6-2.1V5.1L4 7.2zm0 7.4l-3.6 2.1v-3.7L4 10.9v3.7z"/>
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#339933" d="M12 1.837a2.001 2.001 0 0 0-1.002.268L2.73 6.88A2 2 0 0 0 1.73 8.61v9.557a2 2 0 0 0 1 1.732l8.268 4.774a2.003 2.003 0 0 0 2.004 0l8.267-4.774a2 2 0 0 0 1.001-1.732V8.61a2 2 0 0 0-1-1.732L13.003 2.105A2.001 2.001 0 0 0 12 1.837zM8.32 8.766h2.126v1.393h.034c.307-.58.988-1.528 2.656-1.528 2.193 0 2.822 1.343 2.822 3.385v4.542h-2.126v-4.048c0-1.124-.272-1.926-1.396-1.926-.953 0-1.464.647-1.464 1.808v4.166H8.32V8.766z"/>
        </svg>
      );
    case "PHP":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#777BB4" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-5.4 12.8H5.2L6 8.8h2.3c1.3 0 2.1.6 2.1 1.7 0 1.5-1.1 2.5-2.6 2.5H6.6l-.6 1.8zm6.5 0h-1.4l1.4-6h1.4l-.4 1.7h1.6c1.3 0 2.1.6 2.1 1.7 0 1.5-1.1 2.6-2.6 2.6h-2.1zm6.1 0h-1.4l1.4-6h2.3c1.3 0 2.1.6 2.1 1.7 0 1.5-1.1 2.5-2.6 2.5h-1.2l-.6 1.8z"/>
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#3776AB" d="M11.872 0c-5.066 0-4.743.22-4.743 2.228v2.285h9.486v.762H3.771c-2.025 0-3.771 1.205-3.771 3.771v3.771c0 2.054 1.235 3.771 3.771 3.771h2.286v-2.286c0-2.054 1.717-3.771 3.771-3.771h5.328c1.642 0 3.048-1.406 3.048-3.048V3.771C18.213 1.205 16.467 0 11.872 0zM8.444 1.488a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286z"/>
          <path fill="#FFD43B" d="M12.128 24c5.066 0 4.743-.22 4.743-2.228v-2.285H7.385v-.762h12.843c2.025 0 3.771-1.205 3.771-3.771v-3.771c0-2.054-1.235-3.771-3.771-3.771h-2.286v2.286c0 2.054-1.717 3.771-3.771 3.771H9.043c-1.642 0-3.048 1.406-3.048 3.048v3.048c0 2.566 1.746 3.771 6.341 3.771zm3.428-1.488a1.143 1.143 0 1 1 0-2.286 1.143 1.143 0 0 1 0 2.286z"/>
        </svg>
      );
    case "REST APIs":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#8B7CFF" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      );
    case "TensorFlow":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#FF6F00" d="M1.29 6.87L10.82.37v22.75L6.05 20.4v-8.7L1.29 9.17V6.87zm21.42 0l-9.53-6.5v22.75l4.77-2.72v-8.7l4.76-2.53V6.87zm-14.3.43l3.59-2.45v13.62l-3.59-2.05V7.3z"/>
        </svg>
      );
    case "Pandas":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#150458" d="M5.5 2h3v20h-3zM10.5 8h3v14h-3zM15.5 4h3v18h-3z"/>
          <path fill="#E70488" d="M15.5 14h3v4h-3z"/>
        </svg>
      );
    case "NumPy":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#013243" d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-5 13V9l4 6V9h2v6l-4-6v6H7z"/>
        </svg>
      );
    case "SQL":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#00758F" d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 1.34 7 2s-3.13 2-7 2-7-1.34-7-2 3.13-2 7-2zm0 14c-3.87 0-7-1.34-7-2v-2.12c1.78.89 4.26 1.42 7 1.42s5.22-.53 7-1.42V17c0 .66-3.13 2-7 2zm0-5c-3.87 0-7-1.34-7-2v-2.12c1.78.89 4.26 1.42 7 1.42s5.22-.53 7-1.42V12c0 .66-3.13 2-7 2z"/>
        </svg>
      );
    case "Figma":
      return (
        <svg viewBox="0 0 38 57" className={className}>
          <path fill="#EA4C1D" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
          <path fill="#F24E1E" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
          <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z"/>
          <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"/>
          <path fill="#1ABCFE" d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0z"/>
          <path fill="#0ACF83" d="M38 9.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0z"/>
        </svg>
      );
    case "Canva":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="12" fill="#00C4CC"/>
          <path fill="#FFF" d="M15.882 15.688c-1.34.82-3.13 1.1-4.782.72-2.316-.532-3.792-2.584-3.52-4.908.267-2.28 2.22-4.04 4.544-4.08 1.488-.024 2.948.51 3.968 1.488l-1.28 1.4c-.736-.688-1.748-1.056-2.736-1.008-1.42.068-2.592 1.156-2.76 2.572-.18 1.512.784 2.856 2.28 3.204 1.112.26 2.316.076 3.224-.488l.962 1.096z"/>
        </svg>
      );
    case "AdobePhotoshop":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#001E36"/>
          <path fill="#31A8FF" d="M6 7.5h3.8c1.6 0 2.7.9 2.7 2.3 0 1.5-1.1 2.3-2.7 2.3H7.8v3.9H6V7.5zm1.8 3.2h1.8c.7 0 1.1-.3 1.1-.9 0-.5-.4-.8-1.1-.8H7.8v1.7zm10.2 3.6c0-.6-.3-1-1.1-1.3l-1-.4c-.5-.2-.7-.4-.7-.7 0-.3.3-.5.8-.5.6 0 1 .3 1.1.9h1.7c-.1-1.2-1.1-2.1-2.8-2.1-1.7 0-2.6.9-2.6 2 0 .7.4 1.2 1.2 1.5l.9.3c.6.2.8.5.8.8 0 .4-.4.6-1 .6-.8 0-1.2-.4-1.3-1.1h-1.7c.1 1.5 1.1 2.3 3 2.3 1.9.1 2.8-.8 2.8-2.3z"/>
        </svg>
      );
    case "AdobeIlustrator":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#330000"/>
          <path fill="#FF9A00" d="M6.3 16.5l2.7-8h1.8l2.7 8h-1.7l-.6-1.9H8.3l-.6 1.9H6.3zm2.5-3.3h2l-1-3.2-1 3.2zm6.2-4.7h1.7v8h-1.7v-8zm0-2.5h1.7V7.5h-1.7V6z"/>
        </svg>
      );
    case "CorelDraw":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="11" fill="#40B236"/>
          <path fill="#FFF" d="M12 4c-3.3 0-6 2.7-6 6 0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
        </svg>
      );
    case "AdobeIndesign":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#49021F"/>
          <path fill="#FF3366" d="M7 7.5h1.8v9H7v-9zm4.5 3h1.7v1.1h.1c.4-.7 1.2-1.3 2.5-1.3 2 0 3 1.4 3 3.5v4.7h-1.8v-4.3c0-1.1-.4-1.8-1.5-1.8-1 0-1.5.7-1.5 1.8v4.3h-1.8v-8.4z"/>
        </svg>
      );
    case "Git":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.38-.07 1.895.446.52.52.66 1.264.437 1.91l2.67 2.67c.644-.22 1.387-.074 1.905.443.714.715.714 1.874 0 2.59-.716.715-1.876.715-2.592 0-.53-.53-.67-1.282-.435-1.93l-2.483-2.484V15.73c.184.103.35.244.49.444.716.715.716 1.874 0 2.59-.715.715-1.875.715-2.59 0-.717-.716-.717-1.875 0-2.59.18-.18.375-.314.593-.41V9.456c-.218-.096-.413-.23-.593-.41-.53-.53-.67-1.284-.435-1.93L7.394 4.438.456 11.376c-.608.604-.608 1.583 0 2.188l10.48 10.478c.604.604 1.582.604 2.187 0l10.423-10.424c.604-.604.604-1.582 0-2.188z"/>
        </svg>
      );
    case "Postman":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="12" fill="#FF6C37"/>
          <path fill="#FFF" d="M12 4a8 8 0 100 16 8 8 0 000-16zm.5 3l4 3.5-4 3.5v-7z"/>
        </svg>
      );
    case "VSCode":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#007ACC" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63L2.84 5.76a.748.748 0 0 0-1.02.13L.21 7.84a.752.752 0 0 0 .12 1.03l4.7 3.53-4.7 3.53a.752.752 0 0 0-.12 1.03l1.61 1.95a.748.748 0 0 0 1.02.13l4.205-3.37 9.46 8.63c.49.45 1.21.57 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.763V3.237a1.5 1.5 0 0 0-.85-1.35zM18 17.5L10.5 12 18 6.5v11z"/>
        </svg>
      );
    case "Antigravity":
      return <Sparkles className={`${className} text-[#8B7CFF]`} />;
    case "GoogleColab":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#F9AB00" d="M16.9 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm-9.8 0a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"/>
        </svg>
      );
    case "KaggleNotebook":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#20BEFF" d="M18.825 23.859h-5.443l-6.241-8.905-2.032 1.959v6.946H.508V.141h4.601v12.222l7.77-12.222h5.534l-7.79 11.233 8.202 12.485z"/>
        </svg>
      );
    case "Analytical Thinking":
      return <Brain className={`${className} text-[#8B7CFF]`} />;
    case "Problem Solving":
      return <Lightbulb className={`${className} text-amber-400`} />;
    case "Team Collaboration":
      return <Users className={`${className} text-emerald-400`} />;
    case "Requirement Analysis":
      return <FileCheck className={`${className} text-sky-400`} />;
    case "Software Testing":
      return <ShieldCheck className={`${className} text-rose-400`} />;
    case "System Documentation":
      return <BookOpen className={`${className} text-purple-400`} />;
    case "Business Process Understanding":
      return <Workflow className={`${className} text-indigo-400`} />;
    default:
      return <Sparkles className={`${className} text-[#8B7CFF]`} />;
  }
}

interface SkillItem {
  name: string;
}

interface SkillDomain {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  skills: SkillItem[];
}

const DOMAINS: SkillDomain[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    shortLabel: "Frontend Development",
    description:
      "Crafting responsive and interactive user interfaces with modern web technologies & mobile frameworks.",
    skills: [
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Flutter" },
      { name: "TailwindCSS" },
      { name: "HTML/CSS" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    shortLabel: "Backend Development",
    description:
      "Engineering robust REST APIs, server architecture, backend migrations, and application business logic.",
    skills: [
      { name: "Laravel" },
      { name: "Node.js" },
      { name: "PHP" },
      { name: "Python" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "data-ai",
    title: "Data & AI System",
    shortLabel: "Data & AI System",
    description:
      "Analyzing datasets, training machine learning models, and building intelligent data extraction pipelines.",
    skills: [
      { name: "TensorFlow" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Python" },
      { name: "SQL" },
    ],
  },
  {
    id: "design-uiux",
    title: "Design & UIUX",
    shortLabel: "Design & UIUX",
    description:
      "Designing user interfaces, visual communication assets, brand identities, and layout publications.",
    skills: [
      { name: "Figma" },
      { name: "Canva" },
      { name: "AdobePhotoshop" },
      { name: "AdobeIlustrator" },
      { name: "CorelDraw" },
      { name: "AdobeIndesign" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platform",
    shortLabel: "Tools & Platform",
    description:
      "Utilizing modern developer workflows, AI coding assistants, API debugging, and cloud notebook environments.",
    skills: [
      { name: "Git" },
      { name: "Postman" },
      { name: "VSCode" },
      { name: "Antigravity" },
      { name: "GoogleColab" },
      { name: "KaggleNotebook" },
    ],
  },
  {
    id: "softskill",
    title: "Softskill",
    shortLabel: "Softskill",
    description:
      "Core professional capabilities in problem solving, strategic analysis, software quality, and cross-functional execution.",
    skills: [
      { name: "Analytical Thinking" },
      { name: "Problem Solving" },
      { name: "Team Collaboration" },
      { name: "Requirement Analysis" },
      { name: "Software Testing" },
      { name: "System Documentation" },
      { name: "Business Process Understanding" },
    ],
  },
];

export function MetricsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate domain every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DOMAINS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeDomain = DOMAINS[activeIndex];
  const tickerItems = [...DOMAINS, ...DOMAINS, ...DOMAINS, ...DOMAINS];

  return (
    <section id="skills" className="relative z-10 border-y border-white/10 bg-[#0A0A0A] py-16 overflow-hidden">
      {/* 1. Top Ticker Marquee Bar with Flower Dividers */}
      <div className="relative mb-14 border-y border-white/10 bg-white/[0.02] py-4 overflow-hidden select-none">
        {/* Left & Right Fade Overlay Vignettes */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 sm:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 sm:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
          className="flex w-max space-x-8 sm:space-x-12 items-center px-6"
        >
          {tickerItems.map((domain, idx) => {
            const isActive = domain.id === activeDomain.id;
            return (
              <div key={idx} className="flex items-center gap-8 sm:gap-12 shrink-0">
                <button
                  onClick={() => {
                    setActiveIndex(idx % DOMAINS.length);
                    setIsPaused(true);
                  }}
                  className={`font-display text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-wider transition-all px-5 py-2 rounded-full whitespace-nowrap ${
                    isActive
                      ? "bg-[#8B7CFF] text-black shadow-lg shadow-[#8B7CFF]/30 scale-105"
                      : "text-[#8A8A8A] hover:text-white"
                  }`}
                >
                  {domain.shortLabel}
                </button>

                {/* Organic Flower Blossom Divider */}
                <FlowerDividerIcon index={idx} className="h-4 sm:h-5 w-4 sm:w-5 text-[#8B7CFF]/70 shrink-0" />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 2. Main Content Showcase */}
      <div
        className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-20 text-center relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            {/* Active Category Title */}
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase mb-4">
              {activeDomain.title}
            </h2>

            {/* Category Description */}
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#8A8A8A] max-w-2xl mx-auto leading-relaxed mb-10">
              {activeDomain.description}
            </p>

            {/* Skill Tech Cards with Authentic SVG Logos */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl">
              {activeDomain.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="editorial-card px-5 py-3.5 flex items-center gap-3 border border-white/10 hover:border-[#8B7CFF] bg-white/[0.03] rounded-xl transition-all group"
                >
                  <div className="flex items-center justify-center shrink-0">
                    <SkillLogo name={skill.name} className="h-5 sm:h-6 w-5 sm:w-6" />
                  </div>
                  <span className="font-display font-bold text-sm sm:text-base text-white group-hover:text-[#8B7CFF] transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 3. Auto-rotating Progress Indicator */}
        <div className="mt-12 flex items-center justify-end gap-3 font-mono text-xs text-[#8A8A8A]">
          <span>{isPaused ? "Paused" : "Auto-rotating"}</span>
          <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              key={activeIndex + (isPaused ? "-paused" : "")}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "0%" : "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-[#8B7CFF]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


