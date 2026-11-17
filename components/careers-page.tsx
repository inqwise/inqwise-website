import Image from 'next/image';
import { ArrowDown, ArrowUpRight, CodeXml } from 'lucide-react';
import { careerEmail, careerInquiry, careersContent, careersRoutes, siteOrigin, type CareersLocale } from '../lib/careers';

export default function CareersPage({ locale }: { locale: CareersLocale }) {
  const c = careersContent[locale];
  const route = careersRoutes[locale];
  const home = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`;
  const localPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
  const navigation = [`${home}#projects`, `${home}#participate`, `${home}about/`, localPath(route.path), `${home}contact/`];
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteOrigin}${route.path}#webpage`,
    url: `${siteOrigin}${route.path}`,
    name: c.name,
    description: c.description,
    inLanguage: route.language,
    isPartOf: { '@id': `${siteOrigin}/#website` },
    about: { '@type': 'Organization', name: 'Inqwise', url: `${siteOrigin}/` },
  };

  return <div className="careers-site" lang={route.language} dir={route.direction === 'rtl' ? 'rtl' : 'ltr'}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <a className="skip-link" href="#main">{c.skip}</a>
    <header className="site-header wrap">
      <a href={home} className="wordmark" aria-label={c.home} dir="ltr"><Image unoptimized className="brand-logo" src={`${home}inqwise-logo.png`} alt="" width="40" height="40" />inqwise</a>
      <nav aria-label={c.navigation}>
        {c.nav.map((label, index) => <a key={label} href={navigation[index]} aria-current={index === 3 ? 'page' : undefined}>{label}</a>)}
      </nav>
      <a className="header-github" href="https://github.com/inqwise"><CodeXml size={18} aria-hidden="true" /><span>GitHub</span><ArrowUpRight aria-hidden="true" /></a>
    </header>
    <main id="main" className="careers-page">
      <nav className="wrap careers-languages" aria-label={c.languageNavigation}>
        <a href={localPath(careersRoutes.en.path)} hrefLang="en-US" lang="en-US" dir="ltr" aria-current={locale === 'en' ? 'page' : undefined}>English</a>
        <a href={localPath(careersRoutes.he.path)} hrefLang="he" lang="he" dir="rtl" aria-current={locale === 'he' ? 'page' : undefined}>עברית</a>
      </nav>
      <section className="wrap careers-intro" aria-labelledby="careers-title">
        <div>
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 id="careers-title">{c.headline[0]}<br /><span>{c.headline[1]}</span></h1>
          <p className="careers-lead">{c.lead}</p>
          <a className="text-link" href="#project-work">{c.seeWork} <ArrowDown size={18} aria-hidden="true" /></a>
        </div>
        <aside className="careers-status" aria-labelledby="opportunities-title">
          <p className="eyebrow">{c.statusEyebrow}</p><h2 id="opportunities-title">{c.statusTitle}</h2>
          {c.statusParagraphs.map(p => <p key={p}>{p}</p>)}
          <a className="button primary" href={careerInquiry}>{c.askPaid} <ArrowUpRight size={18} aria-hidden="true" /></a>
        </aside>
      </section>
      <section id="project-work" className="wrap section careers-work" aria-labelledby="work-title">
        <div className="section-heading">
          <div><p className="eyebrow">{c.workEyebrow}</p><h2 id="work-title">{c.workTitle}</h2></div>
          <p className="careers-section-note">{c.workNote}</p>
        </div>
        <div className="careers-projects">
          {c.projects.map(project => <article className="careers-project" key={project.href}>
            <h3><bdi>{project.name}</bdi></h3><p>{project.work}</p>
            <div className="careers-first-step"><h4>{c.firstStep}</h4><p>{project.start}</p></div>
            <a className="text-link" href={project.href}>{project.link} <ArrowUpRight size={18} aria-hidden="true" /></a>
          </article>)}
        </div>
      </section>
      <section className="careers-practice" aria-labelledby="practice-title">
        <div className="wrap careers-columns">
          <div><p className="eyebrow">{c.practiceEyebrow}</p><h2 id="practice-title">{c.practiceTitle}</h2><p>{c.practiceIntro}</p></div>
          <ol className="careers-steps">
            {c.steps.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.body}</p></li>)}
          </ol>
        </div>
      </section>
      <section id="career-inquiries" className="wrap section careers-columns" aria-labelledby="inquiry-title">
        <div><p className="eyebrow">{c.inquiryEyebrow}</p><h2 id="inquiry-title">{c.inquiryTitle}</h2>
          <p>{c.inquiryIntro} <a className="careers-inline-link" href={careerInquiry}><bdi>{careerEmail}</bdi></a>.</p>
          <p>{c.inquiryListIntro}</p>
          <ul className="careers-checklist">{c.checklist.map(item => <li key={item}>{item}</li>)}</ul>
          <p>{c.inquiryNote}</p>
          <a className="button primary" href={careerInquiry}>{c.emailInquiry} <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <aside className="careers-agent-note" aria-labelledby="agents-title">
          <p className="eyebrow">{c.agentEyebrow}</p><h2 id="agents-title">{c.agentTitle}</h2>
          <dl>
            {c.facts.map(fact => <div key={fact.title}><dt>{fact.title}</dt><dd>{fact.body}</dd></div>)}
            <div><dt>{c.careerContact}</dt><dd><a className="careers-inline-link" href={careerInquiry}><bdi>{careerEmail}</bdi></a> · {c.subjectLabel}</dd></div>
            <div><dt>{c.confirmTitle}</dt><dd>{c.confirmBody}</dd></div>
          </dl>
          <p>{c.agentNote}</p>
        </aside>
      </section>
    </main>
    <footer className="wrap site-footer"><a href={home} className="wordmark" dir="ltr">inqwise</a><p>{c.footer}</p><span>© 2026 Inqwise</span><a href={home} className="back-top">{c.backHome}</a></footer>
  </div>;
}
