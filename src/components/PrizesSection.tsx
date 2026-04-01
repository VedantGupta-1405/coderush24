import { Trophy } from "lucide-react";

const PrizesSection = () => (
  <section id="prizes" className="section-padding scroll-mt-20">
    <div className="section-container flex flex-col items-center">
      
      <h2 className="heading-display mb-6 w-full max-w-5xl text-white">
        Prizes
      </h2>

      <div className="glass-card p-8 md:p-12 text-center w-full max-w-md mb-8">
        <Trophy size={40} className="mx-auto text-white mb-4" />

        <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
          Prize Pool
        </p>

        <p className="font-display text-4xl font-bold text-white">
          ₹25,000+
        </p>

        <p className="text-sm text-white/70 mt-2">
          Goodies and many more prizes
        </p>
      </div>

    </div>
  </section>
);

export default PrizesSection;
