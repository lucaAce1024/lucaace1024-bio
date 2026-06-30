import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/site/AnimatedSection";
import { Github, Twitter, Mail, Code2, Brain, Rocket, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于 — Luca",
  description: "了解更多关于 Luca 的故事。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-violet-50/30 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            关于<span className="text-gradient">我</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={100} className="glass-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.author.avatar}
              alt={siteConfig.author.name}
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold">{siteConfig.author.name}</h2>
              <p className="text-muted-foreground">{siteConfig.author.bio}</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            {siteConfig.author.description}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            我相信技术的力量可以改变世界。从一行代码到一个完整的产品，每一步都充满挑战和成就感。
            我热表分享知识，也乐于在开源社区中学习和成长。
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Code2, title: "全栈开发", desc: "前端到后端，构建完整产品" },
            { icon: Brain, title: "AI 应用", desc: "将AI能力融入实际场景" },
            { icon: Rocket, title: "产品思维", desc: "从用户需求出发解决问题" },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-5 text-center">
              <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={300} className="text-center">
          <h3 className="text-xl font-bold mb-4">联系我</h3>
          <div className="flex items-center justify-center gap-4">
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:scale-110 transition-transform">
              <Github className="w-5 h-5" />
            </a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:scale-110 transition-transform">
              <Twitter className="w-5 h-5" />
            </a>
            <a href={siteConfig.social.email}
              className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
