'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="w-full bg-white border-b border-[var(--color-border)]">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Inqwise"
            width={40}
            height={40}
            loading="eager"
            decoding="async"
          />
          <span className="text-[var(--color-primary-blue)] font-semibold text-lg">INQWISE</span>
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link 
              href="/" 
              className={`transition ${pathname === '/' ? 'text-[var(--color-accent-red)]' : 'text-[var(--color-primary-blue)] hover:text-[var(--color-accent-red)]'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`transition ${pathname === '/about' ? 'text-[var(--color-accent-red)]' : 'text-[var(--color-primary-blue)] hover:text-[var(--color-accent-red)]'}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={`transition ${pathname === '/services' ? 'text-[var(--color-accent-red)]' : 'text-[var(--color-primary-blue)] hover:text-[var(--color-accent-red)]'}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`transition ${pathname === '/contact' ? 'text-[var(--color-accent-red)]' : 'text-[var(--color-primary-blue)] hover:text-[var(--color-accent-red)]'}`}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
