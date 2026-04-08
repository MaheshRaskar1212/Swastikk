import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  onGetStarted: () => void;
}

const CtaSection = ({ onGetStarted }: CtaSectionProps) => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
          Have an idea? Let's build it together.
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Turn your vision into reality with a team that cares about your success.
        </p>
        <Button variant="hero" size="lg" className="text-base px-10 py-6" onClick={onGetStarted}>
          Start Your Project
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
