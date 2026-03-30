import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// CHANGE: Removed ThemesSection and EventFlowSection from nav links
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Prizes", href: "#prizes" }, // CHANGE: Added Prizes since it's back
  { label: "Rules", href: "#rules" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">

        {/* CHANGE: Replaced plain text "CODE RUSH" with logos + text combo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="flex items-center gap-2"
        >
          {/* CHANGE: Main hackathon logo - replace src with your actual logo path e.g. /logo.png or import it */}
          <img
            src="/hackathon-logo.png"
            alt="Code Rush Logo"
            className="h-8 w-8 object-contain"
            onError={(e) => (e.currentTarget.style.display = "none")} // CHANGE: Hides if image not found
          />

          {/* CHANGE: Brand name text */}
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            CODE RUSH
          </span>

          {/* CHANGE: College logo - replace src with your actual college logo path e.g. /cmrit-logo.png */}
          <img
            src="/college-logo.png"
            alt="CMRIT Logo"
            className="h-7 w-7 object-contain ml-1"
            onError={(e) => (e.currentTarget.style.display = "none")} // CHANGE: Hides if image not found
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <div className="section-container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
