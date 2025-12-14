import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full bg-white border-b border-[var(--color-border)]">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-[var(--color-primary-blue)] font-semibold">INQWISE</Link>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link href="/" className="text-[var(--color-accent-red)] hover:opacity-80 transition">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-[var(--color-primary-blue)] hover:text-[var(--color-accent-red)] transition">About</Link>
          </li>
          <li>
            <Link href="/services" className="text-[var(--color-primary-blue)] hover:text-[var(--color-accent-red)] transition">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="text-[var(--color-primary-blue)] hover:text-[var(--color-accent-red)] transition">Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}