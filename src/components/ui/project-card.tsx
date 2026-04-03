import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the props interface for type safety and clarity
export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, imgSrc, title, description, link, linkText = "View Project", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl",
          className
        )}
        {...props}
      >
        {/* Card Image Section */}
        <div className="aspect-video overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Card Content Section */}
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '20px 24px 24px' }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.3, margin: 0 }}>
            {title}
          </h3>
          <p style={{ marginTop: 10, flexGrow: 1, color: '#64748b', fontSize: 13.5, lineHeight: 1.65 }}>{description}</p>

          {/* Card Link/CTA */}
          <Link
            href={link}
            style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#0066ff', textDecoration: 'none' }}
            className="group/button hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {linkText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </Link>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
