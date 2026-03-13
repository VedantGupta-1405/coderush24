import { ArrowRight, Download, MapPin, Calendar, Users, Coins } from "lucide-react";

const REGISTER_URL = "https://forms.google.com";
const BROCHURE_URL = "https://drive.google.com";

const HeroSection = () => (
  <section id="home" className="min-h-[90vh] flex items-center pt-16 pb-6">
    <div className="section-container w-full">
      <div className="max-w-3xl">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
          CMR Institute of Technology presents
        </p>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] text-foreground mb-4">
          CODE<br />RUSH
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-foreground" />
          <p className="font-display text-lg md:text-xl tracking-wide uppercase text-muted-foreground">
            24-Hour National Hackathon
          </p>
          <div className="h-px w-8 bg-foreground" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { icon: Calendar, label: "Date", value: "8–9 April 2026" },
            { icon: Users, label: "Team Size", value: "2–4 Members" },
            { icon: Coins, label: "Entry Fee", value: "₹500 / Team" },
            { icon: MapPin, label: "Location", value: "CMRIT, Bangalore" },
          ].map((item) => (
            <div key={item.label} className="glass-card p-3">
              <item.icon size={16} className="text-muted-foreground mb-1" />
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-semibold font-display text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-md font-display font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Register Now <ArrowRight size={16} />
          </a>
          <a
            href={BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 rounded-md font-display font-semibold text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Download Brochure <Download size={16} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
