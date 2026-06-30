import Link from "next/link";
import { Github, Twitter, Mail, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="text-lg font-bold text-gradient">Luca</Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.author.bio} — 用代码创造价值，用AI探索未来。
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">导航</h4>
            <div className="flex flex-col gap-2">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">联系</h4>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.email}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Luca</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> & Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
