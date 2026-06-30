import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/site/BlogCard";
import { AnimatedSection } from "@/components/site/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客 — Luca",
  description: "分享全栈开发、AI探索与技术思考的文章。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-violet-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            我的<span className="text-gradient">博客</span>
          </h1>
          <p className="text-muted-foreground text-lg">记录技术思考、项目经验与成长故事</p>
        </AnimatedSection>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">暂无文章，敬请期待 ✨</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
