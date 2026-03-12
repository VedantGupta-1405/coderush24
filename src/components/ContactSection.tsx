import { Phone } from "lucide-react";

const contacts = {
  "Technical Coordinators": [
    { name: "Mr. Adarsh Tiwari", phone: "+91 1234567890" },
    { name: "Ms. Mouna Muthamma", phone: "+91 1234567890" },
  ],
  "Student Coordinators": [
    { name: "Rudraksh", phone: "+91 1234567890" },
    { name: "Zaira", phone: "+91 1234567890" },
  ],
};

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="section-container">
      <h2 className="heading-display mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
        {Object.entries(contacts).map(([group, people]) => (
          <div key={group}>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">{group}</p>
            <div className="space-y-3">
              {people.map((p) => (
                <div key={p.name} className="glass-card p-4">
                  <p className="font-display font-semibold text-foreground">{p.name}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
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
