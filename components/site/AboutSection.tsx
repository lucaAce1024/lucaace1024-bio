"use client";

import { useEffect, useRef, ReactNode } from "react";
import { Github, Twitter, Mail, Code2, Brain, Rocket } from "lucide-react";

export function AboutSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "TypeScript / JavaScript", level: 95 },
    { name: "React / Next.js", level: 92 },
    { name: "Node.js / 后端开发", level: 88 },
    { name: "AI / LLM 应用", level: 85 },
    { name: "Python", level: 80 },
    { name: "DevOps / Cloud", level: 75 },
  ];

  const stats = [
    { icon: Code2, label: "项目经验", value: "50+", color: "text-violet-500" },
    { icon: Brain, label: "技术栈", value: "20+", color: "text-blue-500" },
    { icon: Rocket, label: "开源贡献", value: "100+", color: "text-purple-500" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-violet-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl font-extrabold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About */}
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            关于 <span className="text-gradient">我</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            我是一名全栈开发者，热爱构建优雅的软件产品。从底层架构到前端交互，从传统开发到AI应用，
            我始终保持对新技术的热情和好奇心。
          </p>
        </div>

        {/* Skills */}
        <div ref={skillsRef} className="max-w-2xl mx-auto space-y-5">
          {skills.map((skill, i) => (
            <div key={skill.name} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
