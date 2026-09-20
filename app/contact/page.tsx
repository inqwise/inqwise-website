import type { Metadata } from 'next';
import { ArrowUpRight, CodeXml, Mail, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Inqwise — Questions, ideas, and contributions',
  description: 'Get in touch with Inqwise. Ask about our open-source projects, get help using a library, or share an idea with the community.',
  alternates: { canonical: 'https://inqwise.com/contact/' },
};

export default function Contacts() {
  const home = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap">
      <a href={home} className="wordmark" aria-label="Inqwise home"><img className="brand-logo" src={`${home}inqwise-logo.png`} alt="" width="40" height="40" />inqwise</a>
      <nav aria-label="Main navigation">
        <a href={`${home}#projects`}>Projects</a>
        <a href={`${home}#participate`}>Community</a>
        <a href={`${home}about/`}>About</a>
        <a href={`${home}contact/`} aria-current="page">Contact</a>
      </nav>
      <a className="header-github" href="https://github.com/inqwise"><CodeXml size={18} aria-hidden="true" /><span>GitHub</span><ArrowUpRight aria-hidden="true" /></a>
    </header>
    <main id="main" className="wrap contacts-page">
      <div className="contacts-intro">
        <p className="eyebrow">CONTACTS</p>
        <h1>Start a conversation.</h1>
        <p>Have a question about a project, need help integrating a library, or want to share an idea? You’re welcome to ask.</p>
      </div>
      <div className="contacts-grid">
        <a className="contact-card" href="mailto:contacts@inqwise.com">
          <Mail aria-hidden="true" /><h2>Email us</h2>
          <p>For general questions or a conversation you’d prefer to keep out of a public discussion.</p>
          <span className="text-link">contacts@inqwise.com <ArrowUpRight aria-hidden="true" /></span>
        </a>
        <a className="contact-card" href="https://discord.gg/7RtfkfEPgk">
          <MessageSquare aria-hidden="true" /><h2>Join the community</h2>
          <p>Ask questions, share what you’re building, and talk about using our tools in your projects.</p>
          <span className="text-link">Join us on Discord <ArrowUpRight aria-hidden="true" /></span>
        </a>
        <a className="contact-card" href="https://github.com/inqwise">
          <CodeXml aria-hidden="true" /><h2>Contribute on GitHub</h2>
          <p>Report a bug, suggest an improvement, or contribute code and documentation in the relevant project’s repository.</p>
          <span className="text-link">Explore our repositories <ArrowUpRight aria-hidden="true" /></span>
        </a>
      </div>
      <p className="contacts-note">We actively use these tools in our own projects and help fellow developers put them to work. Your questions and feedback help us improve them.</p>
    </main>
    <footer className="wrap site-footer"><a href={home} className="wordmark">inqwise</a><p>Open projects. An open invitation.</p><span>© 2026 Inqwise</span><a href={home} className="back-top">Back to home</a></footer>
  </>;
}
