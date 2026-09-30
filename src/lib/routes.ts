import { services } from "./services";
import { industries } from "./industries";
import { projects } from "./work";
import { articles } from "./insights";
import { jobs } from "./careers";

/** Every indexable URL, grouped. Feeds sitemap.xml, the HTML sitemap and search. */
export const routeGroups = [
  {
    title: "Company",
    links: [
      { path: "/", title: "Home" }, { path: "/about", title: "About" }, { path: "/process", title: "How We Work" },
      { path: "/technology", title: "Technology" }, { path: "/careers", title: "Careers" }, { path: "/contact", title: "Contact" },
    ],
  },
  { title: "Services", links: [{ path: "/services", title: "All services" }, ...services.map((s) => ({ path: `/services/${s.slug}`, title: s.title }))] },
  { title: "Industries", links: [{ path: "/industries", title: "All industries" }, ...industries.map((i) => ({ path: `/industries/${i.slug}`, title: i.name }))] },
  { title: "Our Work", links: [{ path: "/work", title: "All case studies" }, ...projects.map((p) => ({ path: `/work/${p.slug}`, title: p.title }))] },
  { title: "Insights", links: [{ path: "/insights", title: "All insights" }, ...articles.map((a) => ({ path: `/insights/${a.slug}`, title: a.title }))] },
  { title: "Open Roles", links: jobs.map((j) => ({ path: `/careers/${j.slug}`, title: j.title })) },
  {
    title: "Legal",
    links: [
      { path: "/privacy", title: "Privacy Policy" }, { path: "/terms", title: "Terms & Conditions" },
      { path: "/cookie-policy", title: "Cookie Policy" }, { path: "/accessibility", title: "Accessibility" }, { path: "/site-map", title: "Sitemap" },
    ],
  },
];
