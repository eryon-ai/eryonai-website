import Link from "next/link";
import { ButtonLink } from "@/components/ui";

export function NotFoundContent() {
  return (
    <section className="bg-grid border-b border-line">
      <div className="container-x py-24 md:py-36">
        <p className="t-meta text-steel">Error 404</p>
        <h1 className="t-h1 mt-6 max-w-3xl">This page doesn&apos;t exist — or it moved.</h1>
        <p className="t-lead mt-6 max-w-xl text-body">Our new site reorganised a few addresses. Try one of these, or <Link href="/search" className="text-blue underline underline-offset-4">search the site</Link>.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/services" variant="secondary">Services</ButtonLink>
          <ButtonLink href="/work" variant="secondary">Our Work</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Contact</ButtonLink>
        </div>
      </div>
    </section>
  );
}
