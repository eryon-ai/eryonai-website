// TODO(before launch): confirm each role is actually open. Remove any that aren't —
// these also emit JobPosting schema, and listing closed roles hurts search trust.
export type Job = {
  slug: string;
  title: string;
  team: string;
  experience: string;
  location: string;
  type: "Full-time" | "Contract" | "Internship";
  tech: string[];
  posted: string;
  validThrough: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  build: string[];
};

export const jobs: Job[] = [
  {
    slug: "full-stack-engineer-nextjs",
    title: "Full-Stack Engineer (Next.js / Node.js)",
    team: "Engineering",
    experience: "2–5 years",
    location: "New Delhi, India (Hybrid)",
    type: "Full-time",
    tech: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL"],
    posted: "2026-09-01",
    validThrough: "2026-11-30",
    overview:
      "You will build business applications end to end — interfaces, APIs and data models — for clients in manufacturing, education, healthcare and retail. You'll work directly with a lead engineer and, often, with the client's own team.",
    responsibilities: [
      "Build features across the stack in Next.js, Node.js and PostgreSQL",
      "Turn workflow requirements into clear data models and APIs",
      "Write tests for the parts of the system that handle money and data",
      "Review code and take part in architecture discussions",
      "Demo your work to clients and act on their feedback",
    ],
    requirements: [
      "Professional experience building production web applications with React and TypeScript",
      "Comfort designing relational schemas and writing SQL",
      "Experience building and consuming REST APIs",
      "Clear written communication in English",
    ],
    niceToHave: ["Experience with Supabase or row-level security", "Exposure to Docker and CI pipelines", "Experience with React Native"],
    build: ["CRM and ERP modules for operational teams", "Customer and partner portals", "Dashboards and reporting tools"],
  },
  {
    slug: "backend-engineer-java-spring-boot",
    title: "Backend Engineer (Java / Spring Boot)",
    team: "Engineering",
    experience: "3–6 years",
    location: "New Delhi, India (Hybrid)",
    type: "Full-time",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker"],
    posted: "2026-09-01",
    validThrough: "2026-11-30",
    overview:
      "You will design and build back-end services for systems that carry real operational load: order platforms, HR systems and enterprise integrations.",
    responsibilities: [
      "Design and implement services and APIs in Spring Boot",
      "Model data in PostgreSQL and MongoDB",
      "Build event-driven integrations with Kafka or RabbitMQ",
      "Implement authentication and role-based access control",
      "Improve observability, performance and reliability of services",
    ],
    requirements: [
      "Solid Java and Spring Boot experience in production systems",
      "Understanding of transactions, indexing and query performance",
      "Experience with Spring Security and JWT-based authentication",
      "Familiarity with Docker",
    ],
    niceToHave: ["Experience with Kafka", "Distributed tracing experience", "Cloud experience on AWS or Azure"],
    build: ["Microservices for high-volume ordering platforms", "Scheduling and workforce systems", "Integration layers for legacy systems"],
  },
  {
    slug: "product-designer-ui-ux",
    title: "Product Designer (UI/UX)",
    team: "Design",
    experience: "2–4 years",
    location: "New Delhi, India (Hybrid)",
    type: "Full-time",
    tech: ["Figma", "Design systems", "Prototyping"],
    posted: "2026-09-01",
    validThrough: "2026-11-30",
    overview:
      "You will design business software people use all day — dashboards, portals and mobile apps — working from research with real users and alongside the engineers who build your designs.",
    responsibilities: [
      "Run interviews and observation sessions with client users",
      "Design flows, wireframes and high-fidelity interfaces",
      "Build and maintain design systems",
      "Prototype and test designs before development",
      "Review implemented screens with engineers",
    ],
    requirements: [
      "A portfolio showing workflow-heavy product design, not only marketing pages",
      "Strong Figma skills including components and variables",
      "Working knowledge of accessibility guidelines",
      "Ability to explain design decisions in terms of user tasks",
    ],
    niceToHave: ["Basic HTML/CSS knowledge", "Experience designing data-dense dashboards", "Mobile app design experience"],
    build: ["Operational dashboards", "Customer portals", "Mobile apps for staff and customers"],
  },
];

export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
