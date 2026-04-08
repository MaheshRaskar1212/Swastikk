import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-5 bg-[image:var(--cta-gradient)]" />
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl py-32">
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-6">
          SWASTIK Tech Solutions
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          Build Smarter.{" "}
          <span className="bg-clip-text text-transparent bg-[image:var(--cta-gradient)]">
            Grow Faster.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          We create powerful digital solutions that help your business scale and
          succeed.
        </p>
        <div className="flex justify-center">
          <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={onGetStarted}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
