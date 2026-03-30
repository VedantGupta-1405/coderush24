import { Trophy, Lightbulb, Palette, Star } from "lucide-react";

// CHANGE: Widened container to max-w-5xl, fixed text colors to white for lighter background visibility
const PrizesSection = () => (
  <section id="prizes" className="section-padding">
    <div className="section-container flex flex-col items-center">
      {/* CHANGE: Heading matched to wider max-w-5xl, explicit white color */}
      <h2 className="heading-display mb-6 w-full max-w-5xl text-white">Prizes</h2>

      {/* CHANGE: Winner card centered, colors updated */}
      <div className="glass-card p-8 md:p-12 text-center w-full max-w-md mb-8">
        <Trophy size={40} className="mx-auto text-white mb-4" />
        {/* CHANGE: text-white/70 for label, text-white for prize amount */}
        <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Winner</p>
        <p className="font-display text-4xl font-bold text-white">₹25,000</p>
      </div>

      {/* CHANGE: Recognition awards widened to max-w-5xl */}
      <h3 className="font-display font-semibold text-lg mb-4 text-white w-full max-w-5xl">Recognition Awards</h3>
      <div className="grid sm:grid-cols-3 gap-4 w-full max-w-5xl">
        {[
          { icon: Lightbulb, label: "Best Innovation" },
          { icon: Palette, label: "Best UI/UX" },
          { icon: Star, label: "Best Beginner Team" },
        ].map((a) => (
          <div key={a.label} className="glass-card p-4 flex items-center gap-3">
            {/* CHANGE: icon and label text updated to white for visibility */}
            <a.icon size={20} className="text-white flex-shrink-0" />
            <span className="font-display font-semibold text-sm text-white">{a.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PrizesSection;
