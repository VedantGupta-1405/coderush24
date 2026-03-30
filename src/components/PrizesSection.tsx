import { Trophy } from "lucide-react";

// CHANGE: Widened container to max-w-5xl, fixed text colors to white for lighter background visibility
const PrizesSection = () => (
  <section id="prizes" className="section-padding scroll-mt-15">
    <div className="section-container flex flex-col items-center">
      
      {/* CHANGE: Heading matched to wider max-w-5xl, explicit white color */}
      <h2 className="heading-display mb-6 w-full max-w-5xl text-white">
        Prizes
      </h2>

      {/* CHANGE: Prize pool card centered */}
      <div className="glass-card p-8 md:p-12 text-center w-full max-w-md mb-8">
        <Trophy size={40} className="mx-auto text-white mb-4" />

        {/* CHANGE: Updated label and amount */}
        <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
          Prize Pool
        </p>
        <p className="font-display text-4xl font-bold text-white">
          ₹25,000+
        </p>
      </div>

    </div>
  </section>
);

export default PrizesSection;
