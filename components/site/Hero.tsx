"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Brain } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      try {
        const { animate: animeAnimate, stagger, utils } = await import("animejs");
        
        // Hero title animation
        animeAnimate(".hero-title-char", {
          opacity: [0, 1],
          translateY: [60, 0],
          rotate: [-5, 0],
          duration: 800,
          delay: stagger(40, { start: 200 }),
          easing: "outElastic(1, .8)",
        });

        // Subtitle fade in
        animeAnimate(".hero-subtitle", {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          delay: 600,
          easing: "easeOutCubic",
        });

        // CTA buttons
        animeAnimate(".hero-cta", {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          delay: stagger(80, { start: 900 }),
          easing: "easeOutCubic",
        });

        // Badge
        animeAnimate(".hero-badge", {
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 600,
          delay: 100,
          easing: "easeOutCubic",
        });

        // Floating shapes
        animeAnimate(".float-shape", {
          translateY: [0, -20, 0],
          duration: 3000,
          direction: "alternate",
          loop: true,
          delay: stagger(200),
          easing: "inOutSine",
        });
      } catch (e) {
        console.log("anime.js loading fallback");
      }
    };
    animate();
  }, []);

  const titleChars = "你好，我是 Luca".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-violet-50 via-white to-blue-50">
      {/* Animated blobs */}
      <div className="hero-blob animate-blob-1 bg-violet-400 w-[400px] h-[400px] -top-20 -left-20" />
      <div className="hero-blob animate-blob-2 bg-blue-400 w-[350px] h-[350px] top-1/3 -right-20" />
      <div className="hero-blob animate-blob-3 bg-purple-400 w-[300px] h-[300px] -bottom-20 left-1/3" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="float-shape absolute top-[15%] left-[10%] text-violet-200">
          <Code2 className="w-12 h-12" />
        </div>
        <div className="float-shape absolute top-[25%] right-[15%] text-blue-200">
          <Brain className="w-10 h-10" />
        </div>
        <div className="float-shape absolute bottom-[20%] left-[20%] text-purple-200">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="float-shape absolute bottom-[30%] right-[10%] text-indigo-200">
          <Code2 className="w-14 h-14" />
        </div>
      </div>

      <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-foreground/70">欢迎来到我的个人空间</span>
        </div>

        {/* Title with char animation */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="hero-title-char inline-block" style={{ opacity: 0 }}>
            {titleChars.map((char, i) => (
              <span key={i} className="hero-title-char inline-block" style={{ opacity: 0 }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <br />
          <span className="text-gradient">全栈开发者 & AI探索者</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10" style={{ opacity: 0 }}>
          热衷于用代码创造价值，探索AI的无限可能。
          <br className="hidden sm:block" />
          在这里分享我的技术思考、项目经验和成长故事。
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/blog"
            className="hero-cta group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 hover:scale-105 transition-all"
            style={{ opacity: 0 }}
          >
            阅读博客
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-border font-semibold text-foreground hover:bg-white transition-all"
            style={{ opacity: 0 }}
          >
            了解更多
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-foreground/30" />
        </div>
      </div>
    </section>
  );
}
