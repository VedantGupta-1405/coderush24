// CHANGE: Increased container width from max-w-3xl to max-w-5xl for wider layout
// CHANGE: Updated text colors to text-white and text-white/80 to be clearly visible against lighter background
const AboutSection = () => (
  <section id="about" className="section-padding scroll-mt-20">
    <div className="section-container flex flex-col items-center">
      {/* CHANGE: Heading width matched to wider card, explicit white color for visibility */}
      <h2 className="heading-display mb-8 w-full max-w-5xl text-white">About</h2>

      {/* CHANGE: Wider card max-w-5xl instead of max-w-3xl */}
      <div className="glass-card p-6 md:p-10 w-full max-w-5xl">
        {/* CHANGE: text-white/80 for body text (clearly readable), text-white for highlights */}
        <p className="text-base md:text-lg leading-relaxed text-white/80 text-left">
          Code Rush is a <span className="text-white font-semibold">24-hour national level hackathon</span> that
          brings together innovative minds to collaborate, create, and solve real-world problems using technology.
          Participants work in teams to brainstorm ideas, build prototypes, and present their projects to judges.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-white/80 text-left mt-4">
          Hosted by <span className="text-white font-semibold">CMR Institute of Technology, Bangalore</span>,
          Code Rush is open to students from all colleges across India. Whether you're a developer, designer, or
          domain expert — if you have the drive to build, this hackathon is for you.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-white/80 text-left mt-4">
          Teams of <span className="text-white font-semibold">2 to 4 members</span> will work through the night
          to ideate, build, and demo solutions across tracks including AI & Automation, Cybersecurity, and Smart Cities.
          The best projects win prizes, recognition, and the chance to build something that matters.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
