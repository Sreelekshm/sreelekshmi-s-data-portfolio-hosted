import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sreelekshmi — Data Analyst Portfolio" },
      { name: "description", content: "Sreelekshmi, B.Tech CSE graduate and Data Analyst intern in Kochi. Skills, projects and contact." },
      { property: "og:title", content: "Sreelekshmi — Data Analyst Portfolio" },
      { property: "og:description", content: "B.Tech CSE graduate turning data into decisions. Data Analyst intern, Kochi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { name: "Python (Pandas, NumPy)", level: 85 },
  { name: "SQL", level: 80 },
  { name: "Excel", level: 90 },
  { name: "Power BI / Tableau", level: 75 },
  { name: "Statistics", level: 70 },
  { name: "Data Visualization", level: 85 },
];

const projects = [
  { title: "Sales Performance Dashboard", tag: "Power BI", desc: "Interactive dashboard tracking revenue, regions and product trends to surface key growth drivers." },
  { title: "Customer Churn Analysis", tag: "Python", desc: "Explored customer behaviour data and identified the strongest predictors of churn." },
  { title: "Retail Data Cleaning Pipeline", tag: "SQL", desc: "Cleaned and structured messy transaction records into analysis-ready tables." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 font-mono text-sm">
        <span className="text-primary">sreelekshmi.data</span>
        <div className="flex gap-6 text-muted-foreground">
          <a href="#about" className="hover:text-primary">about</a>
          <a href="#skills" className="hover:text-primary">skills</a>
          <a href="#projects" className="hover:text-primary">projects</a>
          <a href="#contact" className="hover:text-primary">contact</a>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-16">
        <p className="font-mono text-sm text-primary">&gt; SELECT * FROM portfolio;</p>
        <h1 className="mt-4 font-display text-6xl leading-tight md:text-8xl">
          Hi, I'm <span className="text-primary">Sreelekshmi</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Aspiring Data Analyst turning raw numbers into clear stories and better decisions.
        </p>
        <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 font-mono">
          {[["22", "age"], ["B.Tech", "CSE"], ["Kochi", "intern"]].map(([v, l]) => (
            <div key={l} className="rounded-lg border border-border bg-card p-4">
              <div className="text-2xl text-primary">{v}</div>
              <div className="text-xs uppercase text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-border">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[200px_1fr]">
          <h2 className="font-mono text-sm text-primary">01 / about</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>I'm a 22-year-old Computer Science graduate (B.Tech) with a passion for finding patterns in data.</p>
            <p>I'm currently working as a <span className="text-foreground">Data Analyst Intern in Kochi</span>, where I clean, analyse and visualise data to help teams make informed decisions.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-border">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[200px_1fr]">
          <h2 className="font-mono text-sm text-primary">02 / skills</h2>
          <div className="space-y-5">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="mb-2 flex justify-between font-mono text-sm">
                  <span>{s.name}</span><span className="text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-10 font-mono text-sm text-primary">03 / projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="rounded-xl border border-border bg-card p-6 transition hover:border-primary">
                <span className="font-mono text-xs text-primary">{p.tag}</span>
                <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="font-mono text-sm text-primary">04 / contact</h2>
          <p className="mt-6 font-display text-5xl">Let's work with data together.</p>
          <a href="mailto:sreelekshmi@example.com" className="mt-10 inline-block rounded-full bg-primary px-8 py-3 font-mono text-primary-foreground hover:opacity-90">
            sreelekshmi@example.com
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        © 2026 Sreelekshmi · Kochi, Kerala
      </footer>
    </main>
  );
}
