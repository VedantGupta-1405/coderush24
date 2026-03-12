import { Trophy, Lightbulb, Palette, Star } from "lucide-react";

const PrizesSection = () => (
  <section id="prizes" className="section-padding">
    <div className="section-container">
      <h2 className="heading-display mb-6">Prizes</h2>

      <div className="glass-card p-8 md:p-12 text-center max-w-md mb-8">
        <Trophy size={40} className="mx-auto text-foreground mb-4" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Winner</p>
        <p className="font-display text-4xl font-bold text-foreground">₹25,000</p>
      </div>

      <h3 className="font-display font-semibold text-lg mb-4 text-foreground">Recognition Awards</h3>
      <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
        {[
          { icon: Lightbulb, label: "Best Innovation" },
          { icon: Palette, label: "Best UI/UX" },
          { icon: Star, label: "Best Beginner Team" },
        ].map((a) => (
          <div key={a.label} className="glass-card p-4 flex items-center gap-3">
            <a.icon size={20} className="text-foreground flex-shrink-0" />
            <span className="font-display font-semibold text-sm text-foreground">{a.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PrizesSection;
