import Navigation from "@/components/sections/navigation";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="container py-16">
        <h1 className="text-4xl font-bold text-[var(--color-primary-blue)]">Contact Us</h1>
        <div className="mt-4 h-1 w-16 bg-[var(--color-accent-red)]" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-[var(--color-border-gray)] p-6 bg-white">
            <h3 className="text-lg font-semibold text-[var(--color-accent-red)]">Address</h3>
            <p className="mt-2 text-[var(--color-dark-gray)]">123 Innovation Way<br/>Tech City, World</p>
          </div>
          <div className="rounded-lg border border-[var(--color-border-gray)] p-6 bg-white">
            <h3 className="text-lg font-semibold text-[var(--color-accent-red)]">Contact channels</h3>
            <ul className="mt-2 space-y-2 text-[var(--color-primary-blue)]">
              <li><a href="#" className="hover:underline">Discord</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">GitHub</a></li>
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--color-border-gray)] p-6 bg-white">
            <h3 className="text-lg font-semibold text-[var(--color-accent-red)]">Email</h3>
            <p className="mt-2 text-[var(--color-dark-gray)]">contacts@inqwise.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}