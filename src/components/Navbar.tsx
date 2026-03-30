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
        
        {/* 🔽 CHANGE HERE: justify-center keeps nav links centered */}
        <div className="section-container flex items-center justify-center h-16">

          {/* 🔽 CHANGE HERE: gap controls spacing between nav links */}
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

      {/* 🔥 LOGO OVERLAY BLOCK */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="section-container relative">

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="
              pointer-events-auto
              
              /* 🔽 CHANGE HERE: top position */
              absolute top-0 left-0
              
              flex items-center
              
              /* 🔽 CHANGE HERE: gap between logos */
              gap-8
              
              /* 🔽 CHANGE HERE: BOX HEIGHT */
              h-[88px]
              
              /* 🔽 CHANGE HERE: BOX PADDING */
              px-8
              
              rounded-xl
              
              /* 🔽 CHANGE HERE: BACKGROUND (black transparent) */
              bg-black/40 backdrop-blur-lg
              
              border border-white/10
            "
          >
            {/* 🔽 CHANGE HERE: LOGO SIZE */}
            <img
              src="/code_rush_white.png"
              alt="Code Rush"
              className="h-14 md:h-[72px] w-auto object-contain"
            />

            {/* 🔽 CHANGE HERE: LOGO SIZE */}
            <img
              src="/cmrit_logo.png"
              alt="CMRIT"
              className="h-14 md:h-[72px] w-auto object-contain"
            />
          </a>

        </div>
      </div>
    </>
  );
};

export default Navbar;
