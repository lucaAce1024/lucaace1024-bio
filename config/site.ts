export const siteConfig = {
  name: "Luca",
  title: "Luca — 全栈开发者 & AI探索者",
  description: "Luca的个人空间，分享全栈开发、AI探索与技术思考的博客。",
  url: "https://lucaace1024-bio.vercel.app",
  author: {
    name: "Luca",
    bio: "全栈开发者 · AI探索者",
    description: "热衷于用代码创造价值，探索AI的无限可能。在这里分享我的技术思考、项目经验和成长故事。",
    avatar: "/website_logo.webp",
    location: "中国",
    email: "mailto:lucaace1024@gmail.com",
  },
  social: {
    github: "https://github.com/lucaAce1024",
    twitter: "https://twitter.com/lucaace1024",
    email: "mailto:lucaace1024@gmail.com",
  },
  nav: [
    { label: "首页", href: "/" },
    { label: "博客", href: "/blog" },
    { label: "关于", href: "/about" },
  ],
};

export type SiteConfig = typeof siteConfig;
