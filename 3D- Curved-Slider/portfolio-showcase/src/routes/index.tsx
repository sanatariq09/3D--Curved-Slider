import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { projects, type Project } from '@/lib/projects';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Behind the Designs — Sana Tarique' },
    { name: 'description', content: 'Explore a collection of brand identities, digital experiences, and creative concepts by Sana Tarique.' },
    { property: 'og:title', content: 'Behind the Designs — Sana Tarique' },
    { property: 'og:description', content: 'A fresh perspective on branding, design, and digital experiences. Explore the selected work.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function ProjectImage({ project }: { project: Project }) {
  return <div className="project-image" data-panel="single">
    <img src={project.image} alt={project.name} width={1792} height={1024} draggable={false} />
  </div>;
}

const curve = { x: [0, 150, 310, 492, 726, 1010, 1340], rotate: [0, 12, 22, 31, 38, 44, 48], scale: [1, 1.03, 1.12, 1.3, 1.55, 1.9, 2.3] };
function sample(values: number[], distance: number) {
  const i = Math.min(Math.floor(distance), values.length - 2);
  const t = distance - i;
  return (values[i] ?? 0) + ((values[i + 1] ?? 0) - (values[i] ?? 0)) * t;
}
function cardStyle(position: number) {
  const distance = Math.min(Math.abs(position), 6);
  const side = position < 0 ? -1 : 1;
  return { transform: `translateX(${side * sample(curve.x, distance)}px) rotateY(${-side * sample(curve.rotate, distance)}deg) scale(${sample(curve.scale, distance)})`, zIndex: 10 - Math.round(distance) };
}

function Index() {
  const [progress, setProgress] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);
  const [expanded, setExpanded] = useState(false);
  const gallery = useRef<HTMLElement>(null);
  const touchStart = useRef<number | null>(null);
  const target = useRef(0);
  const paused = useRef(false);
  const move = (direction: number) => { target.current = Math.round(target.current) + direction; };
  const current = ((Math.round(progress) % projects.length) + projects.length) % projects.length;

  useEffect(() => {
    let frame = 0; let last = performance.now(); let value = 0;
    const tick = (now: number) => {
      const dt = Math.min(now - last, 50) / 1000; last = now;
      if (!paused.current) target.current += dt / 2.6;
      value += (target.current - value) * Math.min(1, dt * 6);
      setProgress(value);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
  useEffect(() => { paused.current = selected !== null; }, [selected]);

  function showProjects() {
    setExpanded(true);
    setTimeout(() => gallery.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  }

  return <main className="portfolio-page">
    <section className="showcase" aria-labelledby="showcase-title">
      <header className="showcase-heading">
        <p className="eyebrow">Behind the Designs</p>
        <h1 id="showcase-title">Curious What Else I've<br className="desktop-break" /> Created?</h1>
        <p className="intro">A little curiosity. A lot of creativity. A collection of ideas brought to life.</p>
        <Button variant="ghost" className="more-projects" onClick={showProjects}>
          See more Projects <span className="orange-arrow"><ArrowUpRight /></span>
        </Button>
      </header>

      <div className="carousel" role="region" aria-label="Selected project carousel" tabIndex={0}
        onMouseEnter={() => { paused.current = true; }} onMouseLeave={() => { paused.current = selected !== null; }}
        onKeyDown={event => { if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1); }}
        onTouchStart={event => { touchStart.current = event.touches[0]?.clientX ?? null; }}
        onTouchEnd={event => { const end = event.changedTouches[0]?.clientX; if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 35) move(end < touchStart.current ? 1 : -1); touchStart.current = null; }}>
        <div className="carousel-stage">
          {Array.from({ length: 12 }, (_, i) => Math.floor(progress) - 5 + i).map(slot => {
            const project = projects[(((slot + 4) % projects.length) + projects.length) % projects.length];
            if (!project) return null;
            const position = slot - progress;
            return <Button key={slot} variant="ghost" className="project-card" style={cardStyle(position)} aria-label={`View ${project.name}`} tabIndex={Math.abs(position) < 3.5 ? 0 : -1} onClick={() => setSelected(project)}>
              <ProjectImage project={project} />
              <span className="project-caption"><span>{project.name}</span><ArrowUpRight /></span>
            </Button>;
          })}
        </div>
      </div>

      <div className="carousel-navigation">
        <Button variant="ghost" size="icon" aria-label="Previous projects" title="Previous projects" onClick={() => move(-1)}><ArrowLeft /></Button>
        <span className="carousel-count"><span>{String(current + 1).padStart(2, '0')}</span><span className="count-line" />{String(projects.length).padStart(2, '0')}</span>
        <Button variant="ghost" size="icon" aria-label="Next projects" title="Next projects" onClick={() => move(1)}><ArrowRight /></Button>
      </div>

      <ol className="process-steps">
        {['Strategy & Planning', 'Design & Development', 'Launch & Growth', 'Ongoing Support'].map((step, index) => <li key={step}>
          <span className="step-number">0{index + 1}<span className="step-dot" /></span>
          <h2>{step}</h2>
        </li>)}
      </ol>
      <div className="section-signoff"><span>Thoughtfully imagined. Beautifully made.</span><ArrowDown size={14} /></div>
    </section>

    {expanded && <section ref={gallery} className="all-projects" aria-labelledby="all-projects-heading">
      <div className="gallery-heading"><div><p className="eyebrow">A closer look</p><h2 id="all-projects-heading">Selected projects</h2></div><span>Concepts & creative explorations / 2026</span></div>
      <div className="project-grid">{projects.map(project => <Button variant="ghost" className="gallery-project" key={project.name} onClick={() => setSelected(project)}>
        <ProjectImage project={project} />
        <div className="gallery-caption"><div><h3>{project.name}</h3><p>{project.category}</p></div><ArrowUpRight /></div>
      </Button>)}</div>
    </section>}

    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="project-dialog">
        {selected && <><ProjectImage project={selected} /><div className="detail-copy"><p className="eyebrow">{selected.category}</p><DialogTitle>{selected.name}</DialogTitle><DialogDescription>{selected.description}</DialogDescription><p className="concept-label">Independent creative concept</p></div></>}
      </DialogContent>
    </Dialog>
  </main>;
}
