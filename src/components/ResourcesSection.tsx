import { FileText, ExternalLink } from "lucide-react";

const resources = [
  { label: "Download Brochure", url: "https://drive.google.com" },
  { label: "Problem Statements", url: "https://drive.google.com" },
  { label: "Hackathon Rules", url: "https://drive.google.com" },
];

// CHANGE: Widened container to max-w-5xl, updated text to white for lighter bg visibility
const ResourcesSection = () => (
  <section id="resources" className="section-padding">
    <div className="section-container flex flex-col items-center">
      {/* CHANGE: Heading white, matched to max-w-5xl */}
      <h2 className="heading-display mb-8 w-full max-w-5xl text-white">Resources</h2>

      {/* CHANGE: Flex-wrap row kept but constrained to max-w-5xl */}
      <div className="flex flex-wrap gap-3 w-full max-w-5xl">
        {resources.map((r) => (
          <a
            key={r.label}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            // CHANGE: hover border updated to white/40
            className="glass-card px-5 py-3 inline-flex items-center gap-2 hover:border-white/40 transition-colors group"
          >
            {/* CHANGE: icon and label text updated to white */}
            <FileText size={16} className="text-white/70" />
            <span className="font-display font-semibold text-sm text-white">{r.label}</span>
            <ExternalLink size={14} className="text-white/70 group-hover:translate-x-0.5 transition-transform" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ResourcesSection;
