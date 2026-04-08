const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">About Us</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
          Who We Are
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          SWASTIK Tech Solutions is a modern tech startup focused on delivering high-quality digital solutions. We help businesses transform their ideas into powerful products — combining creativity, technology, and strategy to drive meaningful results.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
