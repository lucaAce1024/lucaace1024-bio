import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
}

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="relative overflow-hidden rounded-2xl glass-card p-6 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Gradient top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal bg-violet-50 text-violet-600 hover:bg-violet-100">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTime}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </article>
    </Link>
  );
}
