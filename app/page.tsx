import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { BlogCard } from "@/components/site/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { AnimatedSection } from "@/components/site/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <AboutSection />

      {/* Latest blog posts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              最新<span className="text-gradient">文章</span>
            </h2>
            <p className="text-muted-foreground">记录技术思考与探索</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {posts.length > 0 && (
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                查看全部文章
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
