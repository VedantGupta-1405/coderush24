import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Prizes", href: "#prizes" },
  { label: "Rules", href: "#rules" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 🔥 Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-accent text-accent-foreground h-12 flex items-center justify-center text-sm font-medium">
        🚀 Registrations Open — Limited Slots →
      </div>

      {/* 🔥 Main Navbar */}
      <nav className="fixed top-12 left-0 right-0 z-40 bg-card/90 backdrop-blur-md shadow-sm">
        <div className="section-container flex items-center justify-end h-16">

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(l.href);
                }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(l.href);
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-1"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 🔥 OVERLAY LOGO BLOCK (FIXED + GLASS BACKGROUND) */}
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          handleClick("#home");
        }}
        className="fixed left-6 top-1 z-50"
      >
        <div className="
          flex items-center gap-4 
          h-[72px] px-4 
          rounded-lg 
          bg-white/10 
          backdrop-blur-md 
          border border-white/20
        ">
          <img
            src="/code_rush_white.png"
            alt="Code Rush"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <img
            src="/cmrit_logo.png"
            alt="CMRIT"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
      </a>
    </>
  );
};

export default Navbar;
