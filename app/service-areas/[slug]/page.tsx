import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceArea, serviceAreas } from "../../site-data";

type AreaPageProps = { params: Promise<{ slug: string }> };

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function sitePath(path: string) {
  return `${basePath}${path}`;
}

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};
  const title = `Roofing & Siding in ${area.name}, TX | Budget Roofing & Siding`;
  const description = `Affordable roof repair, roof replacement, residential roofing, insurance-claim support, and siding in ${area.name}, Texas. Free inspections from Budget Roofing & Siding.`;
  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: { title, description, url: `/service-areas/${area.slug}` },
  };
}

export default async function ServiceAreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  const nearby = serviceAreas
    .filter((candidate) => candidate.group === area.group && candidate.slug !== area.slug)
    .slice(0, 7);

  return (
    <main className="location-page">
      <div className="announcement">
        <span>Serving {area.name} and Greater San Antonio</span>
        <a href="tel:+12102698380">Call 210.269.8380 <span aria-hidden="true">→</span></a>
      </div>
      <header className="location-header shell">
        <a className="wordmark" href={sitePath("/")} aria-label="Budget Roofing and Siding home">
          <img className="site-logo location-logo" src={sitePath("/budget-roofing-siding-logo.png")} alt="Budget Roofing and Siding — Quality You Can Afford" width="1400" height="530" />
        </a>
        <nav><a href={sitePath("/#services")}>Services</a><a href={sitePath("/#areas")}>All service areas</a></nav>
        <a className="button button-small phone-button" href="tel:+12102698380">210.269.8380</a>
      </header>

      <section className="location-hero">
        <div className="shell location-hero-grid">
          <div>
            <p className="location-breadcrumb"><a href={sitePath("/")}>Home</a><span>/</span><a href={sitePath("/#areas")}>Service areas</a><span>/</span>{area.name}</p>
            <p className="eyebrow light"><span /> Roofing contractor serving {area.name}</p>
            <h1>Roofing &amp; siding<br />in <em>{area.name}.</em></h1>
            <p className="location-lead">
              Get a clear inspection, practical options, and a scope built around your property—not a sales target.
              Budget Roofing &amp; Siding serves homeowners throughout {area.name} with value-first exterior work.
            </p>
            <div className="hero-actions">
              <a className="button yellow-button" href="tel:+12102698380">Call 210.269.8380 <span aria-hidden="true">↗</span></a>
              <a className="location-text-link" href={sitePath("/#services")}>Explore services ↓</a>
            </div>
          </div>
          <div className="location-value-box">
            <span>{area.group}</span>
            <h2>Quality work.<br />Honest scope.<br /><em>Budget-minded price.</em></h2>
            <p>{area.context}</p>
          </div>
        </div>
      </section>

      <section className="local-intro shell">
        <div className="local-intro-heading">
          <p className="eyebrow"><span /> Exterior help close to home</p>
          <h2>A practical roofing plan for {area.name} homeowners.</h2>
        </div>
        <div className="local-intro-copy">
          <p>
            South Texas roofs deal with hard sun, wind, hail, sudden rain, and long cooling seasons. The right answer
            depends on the current roof, the source of the problem, ventilation, flashing, access, and how long you plan to own the home.
          </p>
          <p>
            We start by documenting what is actually happening. Then we explain whether a focused repair, full replacement,
            insurance-damage restoration, or siding work makes the most sense for your property in {area.name}.
          </p>
        </div>
      </section>

      <section className="local-services">
        <div className="shell">
          <div className="local-services-heading"><span>Services in {area.name}</span><p>Choose the work you need—or start with an inspection if you are not sure.</p></div>
          <div className="local-service-grid">
            {[
              ["Residential roofing", "Roof-system inspections and practical material options for your home.", "/#residential-roofing"],
              ["Roof repair", "Leak tracing, missing shingles, flashing, penetrations, and storm damage.", "/#roof-repair"],
              ["Roof replacement", "Clear replacement scope, material guidance, site protection, and cleanup.", "/#roof-replacement"],
              ["Insurance claims", "Visible-damage documentation and construction-scope coordination.", "/#insurance-claims"],
              ["Siding", "Exterior repair and replacement options built around durability and curb appeal.", "/#siding"],
            ].map(([title, copy, href], index) => (
              <a href={sitePath(href)} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><b aria-hidden="true">↗</b></a>
            ))}
          </div>
        </div>
      </section>

      <section className="local-expect shell">
        <div>
          <p className="eyebrow"><span /> The Budget difference</p>
          <h2>More of your money goes into the property.</h2>
        </div>
        <div className="expect-grid">
          <article><span>01</span><h3>Inspect first</h3><p>We look for the active problem and the surrounding condition before recommending a scope.</p></article>
          <article><span>02</span><h3>Explain the options</h3><p>You see practical choices and where spending more will—or will not—make a difference.</p></article>
          <article><span>03</span><h3>Price the work</h3><p>The quote reflects the property and agreed scope, not what we think the neighborhood can afford.</p></article>
        </div>
      </section>

      <section className="nearby-section">
        <div className="shell nearby-grid">
          <div><p className="eyebrow light"><span /> Nearby service areas</p><h2>Also serving communities near {area.name}.</h2></div>
          <div className="nearby-links">
            {nearby.map((candidate) => <a href={sitePath(`/service-areas/${candidate.slug}`)} key={candidate.slug}>{candidate.name}<span aria-hidden="true">↗</span></a>)}
            <a className="all-areas-link" href={sitePath("/#areas")}>View all 35 areas <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="location-cta">
        <div className="shell">
          <p>Roofing &amp; siding in {area.name}</p>
          <h2>Get the facts.<br /><em>Then decide.</em></h2>
          <a className="button yellow-button" href="tel:+12102698380">Call 210.269.8380 <span aria-hidden="true">↗</span></a>
          <small>Tap to call for a local inspection.</small>
        </div>
      </section>

      <footer>
        <div className="shell footer-top location-footer-top">
          <a className="wordmark" href={sitePath("/")} aria-label="Budget Roofing and Siding home"><img className="site-logo footer-logo" src={sitePath("/budget-roofing-siding-logo.png")} alt="Budget Roofing and Siding — Quality You Can Afford" width="1400" height="530" /></a>
          <p>Quality you can afford. Roofing and siding across Greater San Antonio.</p>
          <a className="footer-domain" href="tel:+12102698380">210.269.8380 ↗</a>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Budget Roofing &amp; Siding</span><span>{area.name}, Texas service area</span></div>
      </footer>
    </main>
  );
}
