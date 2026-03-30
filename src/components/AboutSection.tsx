// CHANGE: Centered container with equal side margins, text remains left-aligned
const AboutSection = () => (
  <section id="about" className="section-padding">
    {/* CHANGE: Using section-container for consistent equal margins on both sides, with flex to center the card */}
    <div className="section-container flex flex-col items-center">
      {/* CHANGE: Heading centered above the card */}
      <h2 className="heading-display mb-8 w-full max-w-3xl">About</h2>

      {/* CHANGE: Card is centered (mx-auto equivalent via flex parent), text inside is left-aligned */}
      <div className="glass-card p-6 md:p-10 w-full max-w-3xl">
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-left">
          Code Rush is a <span className="text-foreground font-semibold">24-hour national level hackathon</span> that
          brings together innovative minds to collaborate, create, and solve real-world problems using technology.
          Participants work in teams to brainstorm ideas, build prototypes, and present their projects to judges.
        </p>

        {/* CHANGE: Added more content to make the About section properly sized */}
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-left mt-4">
          Hosted by <span className="text-foreground font-semibold">CMR Institute of Technology, Bangalore</span>,
          Code Rush is open to students from all colleges across India. Whether you're a developer, designer, or
          domain expert — if you have the drive to build, this hackathon is for you.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-left mt-4">
          Teams of <span className="text-foreground font-semibold">2 to 4 members</span> will work through the night
          to ideate, build, and demo solutions across tracks including AI & Automation, Cybersecurity, and Smart Cities.
          The best projects win prizes, recognition, and the chance to build something that matters.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
