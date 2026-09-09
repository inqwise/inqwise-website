import { ArrowUpRight, ArrowDown, CodeXml, Braces, MessageSquare, MoveRight } from 'lucide-react';

const libraries = [
  {name: 'Inqwise Difference', detail: 'Compare Java objects and track what changed.', url: 'inqwise-difference', category: 'JAVA'},
  {name: 'Inqwise Errors', detail: 'Structure error reports and make exceptions easier to investigate.', url: 'inqwise-errors', category: 'JAVA'},
  {name: 'Inqwise Leader', detail: 'Coordinate distributed work with cluster leader election.', url: 'inqwise-leader', category: 'JAVA / VERT.X'},
  {name: 'Inqwise Async', detail: 'Connect Java I/O with the reactive world of Vert.x.', url: 'inqwise-async', category: 'JAVA / VERT.X'},
  {name: 'Inqwise Neo4j Client', detail: 'Connect Neo4j’s reactive Java driver with Vert.x.', url: 'inqwise-neo4j-client', category: 'JAVA / VERT.X'},
];

function ExternalArrow() { return <ArrowUpRight size={20} aria-hidden="true" />; }

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap">
      <a href="#" className="wordmark" aria-label="Inqwise home"><img className="brand-logo" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/inqwise-logo.png`} alt="" width="40" height="40"/>inqwise</a>
      <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#participate">Community</a><a href="#story">About</a></nav>
      <a className="header-github" href="https://github.com/inqwise"><CodeXml size={18} aria-hidden="true"/><span>GitHub</span><ExternalArrow/></a>
    </header>
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="live-dot"/> OPEN PROJECTS. SHARED CURIOSITY.</p>
          <h1 id="hero-title">Open software.<br/><span>Room for<br/>your ideas.</span></h1>
          <p className="hero-description">Inqwise develops a growing collection of open-source projects, libraries, and utilities. We actively use these tools in our own projects and help friends and fellow developers put them to work in theirs.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">Explore the projects <ArrowDown size={18} aria-hidden="true"/></a><a className="text-link" href="#participate">Join the community <MoveRight size={18} aria-hidden="true"/></a></div>
        </div>
        <aside className="featured-project" aria-labelledby="indexer-title">
          <div className="featured-top"><span className="eyebrow">FEATURED PROJECT</span><span className="new-project">NEW PROJECT</span></div>
          <h2 id="indexer-title">Inqwise Indexer</h2>
          <p className="featured-summary">Changing data.<br/>Useful knowledge.</p>
          <p className="featured-description">Turn changing source data into searchable information and structured reports for AI agents and applications.</p>
          <div className="indexer-flow" aria-label="Source data becomes an index, then reports"><span>Source data</span><MoveRight size={18} aria-hidden="true"/><span>Index</span><MoveRight size={18} aria-hidden="true"/><span>Reports</span></div>
          <p className="project-stage">Under active development · Ready to explore and evaluate</p>
          <a className="button primary" href="https://github.com/inqwise/inqwise-indexer">Explore Indexer <ExternalArrow/></a>
          <p className="featured-invitation">Try the example. Ask a question. Help shape the project.</p>
        </aside>
      </section>
      <div className="intro-strip"><div className="wrap strip-inner"><span>YOUR FIRST CONTRIBUTION</span><p>A question, an idea, or a fresh perspective.<br/>You don’t need to write code to take part.</p><a href="#participate" aria-label="Find ways to join the community"><ArrowDown aria-hidden="true"/></a></div></div>
      <section className="projects wrap section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading"><div><p className="eyebrow">01 / OPEN PROJECTS</p><h2 id="projects-title">Things you can build on.</h2></div><a className="text-link" href="https://github.com/inqwise">All repositories <ExternalArrow/></a></div>
        <div className="project-grid">
          <article className="opinion-card"><div className="card-top"><span className="project-label">THE SURVEY PROJECT</span><span className="project-icon" aria-hidden="true">o.</span></div><div className="opinion-body"><h3>Opinion</h3><p>Every insight starts<br/>with a question.</p><div className="opinion-description">Create questionnaires, collect responses, and explore what people think. An open-source survey platform for research and feedback.</div></div><div className="card-bottom"><span>Surveys · Research · Feedback</span><a className="round-link" href="https://github.com/inqwise-opinion" aria-label="Explore the Opinion project on GitHub"><ExternalArrow/></a></div></article>
          <div className="libraries"><div className="library-heading"><Braces size={23} aria-hidden="true"/><div><h3>Tools from the work</h3><p>Reusable pieces for developers.</p></div></div>{libraries.map((lib)=><a className="library-row" key={lib.url} href={`https://github.com/inqwise/${lib.url}`}><div><span className="language-label">{lib.category}</span><h4>{lib.name}</h4><p>{lib.detail}</p></div><ExternalArrow/></a>)}<a className="library-more" href="https://github.com/inqwise">Explore libraries & infrastructure <MoveRight size={20} aria-hidden="true"/></a></div>
        </div>
      </section>
      <section className="writing-section wrap section" aria-labelledby="writing-title"><div className="section-heading"><div><p className="eyebrow">02 / NOTES & IDEAS</p><h2 id="writing-title">Beyond the repository.</h2></div><a className="text-link" href="https://www.linkedin.com/company/inqwise">Follow on LinkedIn <ExternalArrow/></a></div><div className="writing-list"><a href="https://www.linkedin.com/pulse/metadata-isnt-secondary-its-running-show-inqwise-iwnrf"><span className="writing-type">ARCHITECTURE</span><h3>Metadata Isn’t Secondary.<br/>It’s Running the Show.</h3><span className="writing-source">Read on LinkedIn <ExternalArrow/></span></a><a href="https://www.linkedin.com/pulse/opinion-front-ui-bold-ai-forged-frontend-human-heart-inqwise-8gclf"><span className="writing-type">BUILDING OPINION</span><h3>Opinion Front UI: A Bold, AI-Forged<br/>Frontend with a Human Heart!</h3><span className="writing-source">Read on LinkedIn <ExternalArrow/></span></a></div></section>
      <section className="participate-section" id="participate" aria-labelledby="participate-title"><div className="wrap participate-inner"><div><p className="eyebrow">03 / JOIN THE COMMUNITY</p><h2 id="participate-title">Join the community.<br/>Help shape what’s next.</h2><p>Explore the projects, try the libraries, and help shape what comes next. If you have questions, need help integrating a library, or want to share an idea, you’re welcome to ask.</p></div><div className="participate-links"><a href="https://github.com/inqwise"><CodeXml aria-hidden="true"/><span>Explore & contribute<small>Try a project or share feedback</small></span><ExternalArrow/></a><a href="https://discord.gg/7RtfkfEPgk"><MessageSquare aria-hidden="true"/><span>Join the conversation<small>Ask a question or get help with a library</small></span><ExternalArrow/></a><a href="mailto:contacts@inqwise.com"><span className="at-sign" aria-hidden="true">@</span><span>Say hello<small>contacts@inqwise.com</small></span><ExternalArrow/></a></div></div></section>
      <section className="about-section wrap" id="story" aria-labelledby="about-title"><p className="eyebrow">ABOUT US</p><div className="about-content"><div className="about-intro"><h2 id="about-title">We build tools we use.<br/>And share what we learn.</h2><p>Inqwise is an independent open-source initiative led by its main maintainer, with a community of people who use, explore, and contribute to its projects. Our focus is a growing collection of software projects, libraries, and utilities that people can put to work in their own applications.</p><p>Inqwise’s experience began with survey software and grew through years of building systems. Today, we bring that experience into open-source work, with our attention on the projects and possibilities ahead.</p></div><div className="about-topics"><div><h3>Built through practical use</h3><p>We actively use our tools in our own projects. That hands-on experience helps us understand where they work well, where they need improvement, and what to build next. We’re continually extending the collection with new libraries and utilities, while developing the projects already here.</p></div><div><h3>Shared knowledge, practical help</h3><p>We help friends and fellow developers implement our libraries in their projects. Questions about getting started, choosing a tool, or integrating a library are welcome. Those conversations also help us improve the tools and make them easier for others to use.</p></div><div><h3>An open invitation</h3><p>You can take part by trying a project, reporting a problem, improving documentation, contributing code, or sharing an idea. You don’t need to arrive with a finished contribution—curiosity and a question are enough to start a conversation.</p></div><a className="text-link" href="#participate">Meet the community <ExternalArrow/></a></div></div></section>
    </main>
    <footer className="wrap site-footer"><a href="#" className="wordmark" aria-label="Inqwise back to top"><img className="brand-logo" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/inqwise-logo.png`} alt="" width="40" height="40"/>inqwise</a><p>Open projects. An open invitation.</p><span>© 2026 Inqwise</span><a href="#" className="back-top">Back to top ↑</a></footer>
  </>;
}
