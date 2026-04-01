const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-foreground">
            CMR Institute of Technology
          </p>
          <p className="text-sm text-black">Bangalore</p>
        </div>

        {/* Logos */}
        <div className="flex items-center gap-6">
          
          <img
            src="/cmrit_logo.png"
            alt="Sponsor Logo"
            className="h-16 w-auto object-contain"   // increased
          />

          <img
            src="/code_rush_white.png"
            alt="Hackathon Logo"
            className="h-16 w-auto object-contain"   // increased
          />

        </div>
      </div>

      <p className="text-center text-xs text-black mt-8">
        Built for Code Rush Hackathon 2026
      </p>
    </div>
  </footer>
);

export default Footer;
