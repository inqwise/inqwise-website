import Navigation from "@/components/sections/navigation";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="container py-16">
        <h1 className="text-4xl font-bold text-[var(--color-primary-blue)]">About Inqwise</h1>
        <div className="mt-4 h-1 w-16 bg-[var(--color-accent-red)]" />
        <p className="mt-6 text-[var(--color-dark-gray)] max-w-3xl">
          Inqwise is an innovative fintech and technology company focused on delivering secure,
          scalable, and user-centric solutions. We combine deep industry expertise with modern
          engineering practices to help organizations streamline operations and accelerate growth.
        </p>
        <p className="mt-4 text-[var(--color-dark-gray)] max-w-3xl">
          Our team specializes in DevFinOps, compliance-driven architectures, and digital
          experiences that put reliability and performance first.
        </p>
      </section>
    </main>
  );
}