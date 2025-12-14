import Navigation from "@/components/sections/navigation";

const services = [
  {
    title: "DevFinOps Solutions",
    desc:
      "Bringing financial visibility to DevOps with automated cost tracking, deployment governance, and scalable cloud infrastructure.",
  },
  {
    title: "Fintech Solutions",
    desc:
      "Design and build compliant payment workflows, KYC/AML integrations, and real-time data platforms tailored to financial services.",
  },
  {
    title: "Digital Survey Solutions",
    desc:
      "Enterprise-grade survey tooling with analytics, multilingual support, and secure data pipelines for customer insights.",
  },
  {
    title: "Compliance & Security",
    desc:
      "Security-first architectures aligned to SOC 2, ISO 27001, and GDPR with continuous monitoring and robust access controls.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-light-gray)]">
      <Navigation />
      <section className="container py-16">
        <h1 className="text-4xl font-bold text-[var(--color-primary-blue)]">Our Services</h1>
        <p className="mt-4 text-[var(--color-dark-gray)] max-w-3xl">
          Our company can offer the following services:
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg bg-white p-6 border border-[var(--color-border-gray)] shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--color-primary-blue)]">{s.title}</h3>
              <p className="mt-2 text-[var(--color-dark-gray)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}