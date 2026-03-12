import { FileText, ExternalLink } from "lucide-react";

const resources = [
  { label: "Download Brochure", url: "https://drive.google.com" },
  { label: "Problem Statements", url: "https://drive.google.com" },
  { label: "Hackathon Rules", url: "https://drive.google.com" },
];

const ResourcesSection = () => (
  <section id="resources" className="section-padding">
    <div className="section-container">
      <h2 className="heading-display mb-8">Resources</h2>
      <div className="flex flex-wrap gap-3">
        {resources.map((r) => (
          <a
            key={r.label}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-5 py-3 inline-flex items-center gap-2 hover:border-foreground/30 transition-colors group"
          >
            <FileText size={16} className="text-muted-foreground" />
            <span className="font-display font-semibold text-sm text-foreground">{r.label}</span>
            <ExternalLink size={14} className="text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ResourcesSection;
