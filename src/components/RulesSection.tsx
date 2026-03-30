import { CheckCircle } from "lucide-react";

const rules = [
  "Team size must be between 2 and 4 members.",
  "Participants must develop their solution during the hackathon.",
  "Pre-built projects are not allowed.",
  "Teams must submit their project before the final deadline.",
  "Judges' decisions will be final.",
];

// CHANGE: Widened container to max-w-5xl, updated all text to white/white-80 for lighter bg visibility
const RulesSection = () => (
  <section id="rules" className="section-padding scroll-mt-20">
    <div className="section-container flex flex-col items-center">
      {/* CHANGE: Heading white, matched to max-w-5xl */}
      <h2 className="heading-display mb-8 w-full max-w-5xl text-white">Rules</h2>

      {/* CHANGE: Card widened to max-w-5xl */}
      <div className="glass-card p-6 md:p-8 w-full max-w-5xl">
        <ul className="space-y-4">
          {rules.map((r, i) => (
            <li key={i} className="flex gap-3 items-start">
              {/* CHANGE: icon and text updated to white colors */}
              <CheckCircle size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base text-white/80">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default RulesSection;
