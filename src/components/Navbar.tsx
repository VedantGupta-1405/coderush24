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
      {/* 🔥 Top Bar (fixed color) */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/70 text-white backdrop-blur-md h-12 flex items-center justify-center text-base md:text-lg font-semibold">
  Registrations Open — Limited Slots 
</div>

      {/* 🔥 Main Navbar */}
      <nav className="fixed top-12 left-0 right-0 z-40 bg-card/90 backdrop-blur-md shadow-sm">
        
        {/* Centered Nav Links */}
        <div className="section-container flex items-center justify-center h-16">

          <div className="hidden md:flex items-center gap-8">
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
            className="md:hidden text-foreground absolute right-6"
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

      {/* 🔥 LOGO OVERLAY (FULL LEFT) */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="relative">

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="
              pointer-events-auto
              absolute top-3 left-4   /* 🔥 pushed to left */
              flex items-center gap-8
              h-[88px] px-8
              rounded-xl
              bg-black/40 backdrop-blur-lg
              border border-white/10
            "
          >
            {/* 🔥 Bigger logos */}
            <img
              src="/code_rush_white.png"
              alt="Code Rush"
              className="h-16 md:h-[90px] w-auto object-contain"
            />

            <img
              src="/cmrit_logo.png"
              alt="CMRIT"
              className="h-16 md:h-[84px] w-auto object-contain"
            />
          </a>

        </div>
      </div>
    </>
  );
};

export default Navbar;
