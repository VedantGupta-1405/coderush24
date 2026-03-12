import { CheckCircle } from "lucide-react";

const rules = [
  "Team size must be between 2 and 4 members.",
  "Participants must develop their solution during the hackathon.",
  "Pre-built projects are not allowed.",
  "Teams must submit their project before the final deadline.",
  "Judges' decisions will be final.",
];

const RulesSection = () => (
  <section id="rules" className="section-padding">
    <div className="section-container">
      <h2 className="heading-display mb-8">Rules</h2>
      <div className="glass-card p-6 md:p-8 max-w-2xl">
        <ul className="space-y-4">
          {rules.map((r, i) => (
            <li key={i} className="flex gap-3 items-start">
              <CheckCircle size={18} className="text-foreground mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base text-muted-foreground">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default RulesSection;
