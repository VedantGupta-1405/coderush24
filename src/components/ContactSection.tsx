import { Phone } from "lucide-react";

const contacts = {
  "Technical Coordinators": [
    { name: "Mr. Adarsh Tiwari", phone: "+91 8874270707" },
    { name: "Ms. Mouna Muthamma", phone: "+91 9483354144" },
  ],
  "Student Coordinators": [
    { name: "Rudraksh", phone: "+91 7975882681" },
    { name: "Zaira", phone: "+91 7780994557" },
  ],
};

// CHANGE: Widened container to max-w-5xl, updated all text to white variants for lighter bg visibility
const ContactSection = () => (
  <section id="contact" className="section-padding scroll-mt-20">
    <div className="section-container flex flex-col items-center">
      {/* CHANGE: Heading white, matched to max-w-5xl */}
      <h2 className="heading-display mb-6 w-full max-w-5xl text-white">Contact</h2>

      {/* CHANGE: Grid widened to max-w-5xl */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        {Object.entries(contacts).map(([group, people]) => (
          <div key={group}>
            {/* CHANGE: Group label updated to white/60 */}
            <p className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-4">{group}</p>
            <div className="space-y-3">
              {people.map((p) => (
                <div key={p.name} className="glass-card p-4">
                  {/* CHANGE: Name white, phone white/70 */}
                  <p className="font-display font-semibold text-white">{p.name}</p>
                  <p className="text-sm text-white/70 flex items-center gap-1.5 mt-1">
                    <Phone size={13} /> {p.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
