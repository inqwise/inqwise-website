import type { Metadata } from 'next';
import { ArrowUpRight, CodeXml } from 'lucide-react';
import AboutContent from '../../components/about-content';

export const metadata: Metadata = {
  title: 'About Inqwise — Open software, shared knowledge',
  description: 'Learn about Inqwise, our open-source projects, and the practical experience and community behind our libraries and utilities.',
  alternates: { canonical: 'https://inqwise.com/about/' },
};

export default function About() {
  const home = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap">
      <a href={home} className="wordmark" aria-label="Inqwise home"><img className="brand-logo" src={`${home}inqwise-logo.png`} alt="" width="40" height="40" />inqwise</a>
      <nav aria-label="Main navigation">
        <a href={`${home}#projects`}>Projects</a>
        <a href={`${home}#participate`}>Community</a>
        <a href={`${home}about/`} aria-current="page">About</a>
        <a href={`${home}contact/`}>Contact</a>
      </nav>
      <a className="header-github" href="https://github.com/inqwise"><CodeXml size={18} aria-hidden="true" /><span>GitHub</span><ArrowUpRight aria-hidden="true" /></a>
    </header>
    <main id="main" className="about-page">
      <AboutContent standalone />
      <div className="wrap about-contact"><a className="button primary" href={`${home}contact/`}>Get in touch <ArrowUpRight aria-hidden="true" /></a></div>
    </main>
    <footer className="wrap site-footer"><a href={home} className="wordmark">inqwise</a><p>Open projects. An open invitation.</p><span>© 2026 Inqwise</span><a href={home} className="back-top">Back to home</a></footer>
  </>;
}
