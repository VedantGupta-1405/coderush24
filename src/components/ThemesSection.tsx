import { Bot, Shield, Building2 } from "lucide-react";

const themes = [
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Leverage artificial intelligence and machine learning to automate processes, build intelligent systems, and create smarter solutions.",
  },
  {
    icon: Shield,
    title: "Cybersecurity / Digital Security",
    description:
      "Build tools and solutions that protect digital assets, detect threats, and enhance security in the digital world.",
  },
  {
    icon: Building2,
    title: "Smart Cities & Sustainability",
    description:
      "Design technology-driven solutions for urban challenges including transportation, energy, waste management, and sustainable living.",
  },
];

const ThemesSection = () => (
  <section id="themes" className="section-padding">
    <div className="section-container">
      <h2 className="heading-display mb-6">Themes</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {themes.map((t) => (
          <div
            key={t.title}
            className="glass-card p-6 group hover:border-foreground/30 transition-colors"
          >
            <t.icon size={28} className="text-foreground mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-bold text-lg mb-2 text-foreground">{t.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ThemesSection;
