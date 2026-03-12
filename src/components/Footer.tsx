const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-foreground">CMR Institute of Technology</p>
          <p className="text-sm text-muted-foreground">Bangalore</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-20 h-10 border border-border rounded flex items-center justify-center text-xs text-muted-foreground">
            Sponsor Logo
          </div>
          <div className="w-20 h-10 border border-border rounded flex items-center justify-center text-xs text-muted-foreground">
            Hackathon Logo
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        Built for Code Rush Hackathon 2026
      </p>
    </div>
  </footer>
);

export default Footer;
