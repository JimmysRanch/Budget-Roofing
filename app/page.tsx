import { areaGroups, serviceAreas } from "./site-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function sitePath(path: string) {
  return `${basePath}${path}`;
}

const services = [
  ["01", "Residential Roofing", "Protection built around your home, budget, and long-term plans."],
  ["02", "Roof Repair", "Targeted repairs that solve the problem without overselling the solution."],
  ["03", "Roof Replacement", "A clear, well-managed replacement with practical material options."],
  ["04", "Insurance Claims", "Photo documentation and scope support from inspection through completion."],
  ["05", "Siding", "Durable siding that improves curb appeal, comfort, and weather protection."],
];

const serviceDetails = [
  {
    id: "residential-roofing",
    number: "01",
    label: "Residential",
    title: "Residential roofing built around your home—not a sales quota.",
    copy: "From older homes inside Loop 410 to newer builds across the Hill Country, we inspect the whole roof system and recommend the option that makes practical and financial sense.",
    items: ["Roof condition inspections", "Shingle and metal options", "Ventilation and flashing review", "Straightforward written scope"],
  },
  {
    id: "roof-repair",
    number: "02",
    label: "Roof repair",
    title: "Fix the failure. Protect the rest. Skip the unnecessary replacement.",
    copy: "A leak does not automatically mean you need a new roof. We trace the source, explain what failed, and price the repair before recommending anything larger.",
    items: ["Leak and moisture tracing", "Missing or lifted shingles", "Flashing and roof penetrations", "Storm and wind damage"],
  },
  {
    id: "roof-replacement",
    number: "03",
    label: "Roof replacement",
    title: "A clean replacement plan with no mystery in the middle.",
    copy: "When replacement is the right call, you get clear material choices, a defined installation scope, jobsite protection, and a final walkthrough before we call it complete.",
    items: ["Repair-versus-replace comparison", "Material and color guidance", "Decking condition review", "Magnetic cleanup and walkthrough"],
  },
  {
    id: "insurance-claims",
    number: "04",
    label: "Roof insurance claims",
    title: "Strong documentation when the weather turns into paperwork.",
    copy: "We help document visible storm damage, organize the construction scope, and coordinate the roofing side of the process so you can make informed decisions with your carrier.",
    items: ["Photo-documented inspection", "Damage and scope review", "Adjuster meeting coordination", "Restoration planning"],
    note: "Coverage decisions and claim approvals remain with your insurance carrier.",
  },
  {
    id: "siding",
    number: "05",
    label: "Siding",
    title: "Curb appeal that also works harder for your home.",
    copy: "Repair damaged sections or transform the exterior with a complete siding plan designed around durability, maintenance, appearance, and your actual budget.",
    items: ["Siding repair and replacement", "Fiber-cement and vinyl options", "Trim, soffit, and fascia", "Weather-damage restoration"],
  },
];

const savingsPoints = [
  ["Lean by design", "You pay for skilled labor, proven materials, and a well-managed job—not layers of unnecessary overhead."],
  ["Options before upgrades", "We show practical good-better-best choices and explain where spending more matters—and where it does not."],
  ["Scope you can compare", "A clear written scope makes it easier to compare real work instead of chasing a suspiciously low headline price."],
  ["No neighborhood markup", "We quote the condition and complexity of your home, not what we think your ZIP code can afford."],
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span>Serving San Antonio &amp; surrounding communities</span>
        <a href="tel:+12102698380">Call 210.269.8380 <span aria-hidden="true">→</span></a>
      </div>

      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Budget Roofing and Siding home">
          <img className="site-logo" src={sitePath("/budget-roofing-siding-logo.png")} alt="Budget Roofing and Siding — Quality You Can Afford" width="1400" height="530" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#savings">Why Budget</a>
          <a href="#process">Our Process</a>
          <a href="#areas">Service Areas</a>
        </nav>
        <a className="button button-small phone-button" href="tel:+12102698380">210.269.8380</a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Residential roofing &amp; siding specialists</p>
          <h1>A stronger home<br />shouldn&apos;t <em>cost you more.</em></h1>
          <p className="hero-lead">
            Get the workmanship your home deserves with straightforward options,
            a clear scope, and pricing built for real families—not inflated overhead.
          </p>
          <div className="hero-actions">
            <a className="button" href="tel:+12102698380">Call 210.269.8380 <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#savings">See how you save <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="trust-list" aria-label="Company highlights">
            <li><i>✓</i> Free inspections</li>
            <li><i>✓</i> Insurance-claim specialists</li>
            <li><i>✓</i> Clear, honest scopes</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Budget Roofing and Siding brand">
          <div className="brand-image-wrap">
            <img
              src={sitePath("/budget-roofing-siding-logo.png")}
              alt="Budget Roofing and Siding — Quality You Can Afford"
              width="1400"
              height="530"
            />
          </div>
          <div className="value-card">
            <p>THE BUDGET DIFFERENCE</p>
            <strong>More of your money goes into your home.</strong>
            <span>Practical options. Transparent scope. No pressure.</span>
          </div>
          <div className="angle angle-one" />
          <div className="angle angle-two" />
        </div>
      </section>

      <section className="service-intro" id="services">
        <div className="shell">
          <div className="section-kicker">
            <p>Roofing &amp; exterior services</p>
            <span>One reliable team from the first inspection to the final cleanup.</span>
          </div>
          <div className="service-grid">
            {services.map(([number, title, description]) => (
              <a className="service-card" href={`#${title.toLowerCase().replaceAll(" ", "-")}`} key={title}>
                <span>{number}</span>
                <h2>{title}</h2>
                <p>{description}</p>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="service-details">
        <div className="shell">
          {serviceDetails.map((service, index) => (
            <article className={`service-row ${index % 2 ? "service-row-reverse" : ""}`} id={service.id} key={service.id}>
              <div className="service-number" aria-hidden="true">{service.number}</div>
              <div className="service-copy">
                <p className="eyebrow"><span /> {service.label}</p>
                <h2>{service.title}</h2>
                <p>{service.copy}</p>
                {service.note ? <small>{service.note}</small> : null}
              </div>
              <div className="service-list">
                {service.items.map((item) => <div key={item}><i>✓</i><span>{item}</span></div>)}
                <a href="#contact">Discuss this service <b aria-hidden="true">↗</b></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="savings" id="savings">
        <div className="shell savings-grid">
          <div className="savings-copy">
            <p className="eyebrow light"><span /> Quality you can afford</p>
            <h2>The price should be <em>budget.</em><br />The work shouldn&apos;t be.</h2>
            <p>
              Low price and good work are not opposites. The real difference is how a contractor runs the business,
              explains the scope, and helps you spend money where it protects the home.
            </p>
            <div className="quote-stripe">We quote the work—not the neighborhood.</div>
          </div>
          <div className="savings-points">
            {savingsPoints.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="shell">
          <div className="center-heading">
            <p className="eyebrow"><span /> Simple from the start</p>
            <h2>No pressure. No guessing.<br /><em>Four clear steps.</em></h2>
          </div>
          <div className="process-grid">
            {[
              ["01", "Inspect", "We examine the roof or siding, document what we see, and identify the real source of the problem."],
              ["02", "Explain", "You get plain-English findings, practical options, and the reasoning behind each recommendation."],
              ["03", "Build", "We protect the property, complete the agreed scope, and keep the worksite organized along the way."],
              ["04", "Verify", "We review the finished work, clean the site, and close the job only after the scope is complete."],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <div className="process-icon"><span>{number}</span></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="area-section" id="areas">
        <div className="shell">
          <div className="area-heading">
            <div>
              <p className="eyebrow light"><span /> Greater San Antonio service area</p>
              <h2>Local roofing help<br /><em>across 35 communities.</em></h2>
            </div>
            <p>
              Choose your city or neighborhood for a localized overview of residential roofing,
              repairs, replacements, insurance-claim support, and siding near you.
            </p>
          </div>
          <div className="area-groups">
            {areaGroups.map((group) => (
              <section className="area-group" key={group.name}>
                <header>
                  <h3>{group.name}</h3>
                  <p>{group.description}</p>
                </header>
                <div className="area-links">
                  {group.areas.map(([name, slug]) => (
                    <a href={sitePath(`/service-areas/${slug}`)} key={slug}><span>{name}</span><b aria-hidden="true">↗</b></a>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="area-count">Serving {serviceAreas.length} named communities across the San Antonio region.</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow"><span /> Straight answers</p>
            <h2>Questions homeowners ask before they hire a roofer.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>How do I know whether I need a repair or replacement?<span>+</span></summary>
              <p>Age matters, but condition matters more. We look at the active failure, surrounding shingles or panels, flashing, penetrations, decking clues, and whether a repair can reasonably protect the remaining system.</p>
            </details>
            <details>
              <summary>Do you provide free roof inspections?<span>+</span></summary>
              <p>Yes. The initial inspection is designed to identify visible concerns and give you a clear next step without a high-pressure sales pitch.</p>
            </details>
            <details>
              <summary>Can you help with a storm-damage insurance claim?<span>+</span></summary>
              <p>We can document visible damage, help organize the construction scope, and coordinate roofing details. Your insurance carrier makes all coverage and claim decisions.</p>
            </details>
            <details>
              <summary>Why can Budget Roofing &amp; Siding cost less?<span>+</span></summary>
              <p>Our value model is built around lean operations, practical material choices, transparent scopes, and avoiding unnecessary upgrades. Your proposal still depends on actual size, condition, access, materials, and complexity.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow light"><span /> Start with a free inspection</p>
            <h2>Get the facts.<br />Then decide.</h2>
            <p>Tell us what you&apos;re seeing and where the property is located. We&apos;ll start with a straightforward conversation about the next best step.</p>
            <div className="contact-promise">
              <span>✓</span>
              <p><strong>No-pressure inspection</strong>Clear findings and practical options for your home.</p>
            </div>
          </div>
          <form className="contact-form" action="mailto:info@budgetroofingandsiding.com" method="post" encType="text/plain">
            <a className="call-strip" href="tel:+12102698380"><span>Call or text us now</span><strong>210.269.8380</strong></a>
            <label>Full name<input name="Name" autoComplete="name" required placeholder="Your name" /></label>
            <div className="field-row">
              <label>Phone<input name="Phone" autoComplete="tel" inputMode="tel" required placeholder="Best number" /></label>
              <label>ZIP code<input name="ZIP" autoComplete="postal-code" inputMode="numeric" required placeholder="Property ZIP" /></label>
            </div>
            <label>What do you need?
              <select name="Service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Residential roofing</option>
                <option>Roof repair</option>
                <option>Roof replacement</option>
                <option>Insurance claim inspection</option>
                <option>Siding</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label>What&apos;s going on?<textarea name="Details" rows={4} placeholder="Leak, storm damage, missing shingles, old roof, siding damage…" /></label>
            <button className="button" type="submit">Request my inspection <span aria-hidden="true">↗</span></button>
            <small>Submitting opens your email app so you can send the request directly.</small>
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-top">
          <a className="wordmark wordmark-dark" href="#top" aria-label="Budget Roofing and Siding home">
            <img className="site-logo footer-logo" src={sitePath("/budget-roofing-siding-logo.png")} alt="Budget Roofing and Siding — Quality You Can Afford" width="1400" height="530" />
          </a>
          <p>Quality you can afford. Roofing and siding across Greater San Antonio.</p>
          <a className="footer-domain" href="tel:+12102698380">210.269.8380 ↗</a>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Budget Roofing &amp; Siding</span>
          <span>Residential roofing • Repairs • Replacements • Claims • Siding</span>
        </div>
      </footer>
    </main>
  );
}
