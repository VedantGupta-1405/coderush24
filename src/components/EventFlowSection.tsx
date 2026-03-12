const stages = [
  { time: "09:30 AM", title: "Opening Ceremony" },
  { time: "11:00 AM", title: "Ideation & Theme Reveal" },
  { time: "02:30 PM", title: "Idea Pitch Screening" },
  { time: "05:30 PM", title: "Development Phase" },
  { time: "10:00 PM", title: "Mid Hack Evaluation" },
  { time: "08:30 AM", title: "Final Demo & Presentations" },
  { time: "11:30 AM", title: "Winner Announcement" },
];

const rounds = [
  {
    round: "Round 1",
    title: "Ideation Phase",
    description:
      "Teams brainstorm ideas based on the assigned theme and prepare a PPT. They present their problem statement, solution, and approach to the judges.",
  },
  {
    round: "Round 2",
    title: "Development Phase",
    description:
      "Shortlisted teams build a working prototype or Minimum Viable Product (MVP) based on their selected idea.",
  },
];

const EventFlowSection = () => (
  <section id="eventflow" className="section-padding">
    <div className="section-container">
      <h2 className="heading-display mb-6">Event Flow</h2>

      {/* Timeline */}
      <div className="relative max-w-2xl mb-10">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
        {stages.map((s, i) => (
          <div key={i} className="relative pl-10 pb-5 last:pb-0">
            <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold font-display">
              {i + 1}
            </div>
            <p className="text-xs text-muted-foreground mb-0.5">{s.time}</p>
            <p className="font-display font-semibold text-foreground">{s.title}</p>
          </div>
        ))}
      </div>

      {/* Rounds */}
      <h3 className="heading-display text-2xl mb-6">Hackathon Rounds</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {rounds.map((r) => (
          <div key={r.round} className="glass-card p-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">{r.round}</p>
            <h4 className="font-display font-bold text-lg mb-2 text-foreground">{r.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventFlowSection;
