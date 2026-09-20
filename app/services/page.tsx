import type { Metadata } from 'next';
import { ArrowUpRight, CodeXml } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inqwise — Open-source projects and library support',
  description: 'Inqwise now focuses on open-source projects, libraries, and utilities. Explore our tools or ask for help using them in your project.',
  alternates: { canonical: 'https://inqwise.com/services/' },
};

export default function Services() {
  const home = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap">
      <a href={home} className="wordmark" aria-label="Inqwise home"><img className="brand-logo" src={`${home}inqwise-logo.png`} alt="" width="40" height="40" />inqwise</a>
      <nav aria-label="Main navigation">
        <a href={`${home}#projects`}>Projects</a>
        <a href={`${home}#participate`}>Community</a>
        <a href={`${home}about/`}>About</a>
        <a href={`${home}contact/`}>Contact</a>
      </nav>
      <a className="header-github" href="https://github.com/inqwise"><CodeXml size={18} aria-hidden="true" /><span>GitHub</span><ArrowUpRight aria-hidden="true" /></a>
    </header>
    <main id="main" className="wrap contacts-page">
      <div className="contacts-intro">
        <p className="eyebrow">OUR FOCUS TODAY</p>
        <h1>Open-source tools.<br />Practical help.</h1>
        <p>If you followed a link to our former services page, welcome. Today, Inqwise focuses on building and sharing open-source projects, libraries, and utilities.</p>
      </div>
      <div className="about-content">
        <div className="about-topics">
          <div><h2>Tools we use and improve</h2><p className="contacts-note">We actively use our tools in our own projects and continue extending the collection with new libraries and utilities. Explore the projects, try a library, and help shape what comes next.</p></div>
          <a className="text-link" href={`${home}#projects`}>Explore our projects <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="about-topics">
          <div><h2>Questions are welcome</h2><p className="contacts-note">We help friends and fellow developers put our libraries to work. If you have a question about getting started, integrating a library, or contributing an improvement, get in touch.</p></div>
          <a className="text-link" href={`${home}contact/`}>Ask a question <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </main>
    <footer className="wrap site-footer"><a href={home} className="wordmark">inqwise</a><p>Open projects. An open invitation.</p><span>© 2026 Inqwise</span><a href={home} className="back-top">Back to home</a></footer>
  </>;
}
