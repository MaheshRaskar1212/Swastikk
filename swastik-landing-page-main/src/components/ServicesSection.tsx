import { Globe, Smartphone, Palette, TrendingUp, Share2, Gamepad2 } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Fast, scalable websites that drive results" },
  { icon: Smartphone, title: "Mobile App Development", desc: "User-friendly apps that engage and convert" },
  { icon: Palette, title: "Graphics Designing", desc: "Creative designs that elevate your brand" },
  { icon: TrendingUp, title: "Digital Marketing", desc: "Strategies that bring real growth" },
  { icon: Share2, title: "Social Media Marketing", desc: "Build your presence and connect with your audience" },
  { icon: Gamepad2, title: "Game Development", desc: "Interactive experiences that captivate users" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-hover-shadow)] transition-all duration-300 border border-border hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-[image:var(--cta-gradient)] group-hover:text-primary-foreground transition-all duration-300">
                <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
