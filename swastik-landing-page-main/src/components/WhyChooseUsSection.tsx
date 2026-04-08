import { Cpu, Users, BadgeDollarSign, Layers } from "lucide-react";

const points = [
  { icon: Cpu, title: "Modern Technology", desc: "We leverage the latest tools and frameworks to deliver cutting-edge solutions that keep you ahead of the curve." },
  { icon: Users, title: "Client-Focused Approach", desc: "Your goals drive every decision we make. We listen, understand, and deliver exactly what your business needs." },
  { icon: BadgeDollarSign, title: "Affordable Solutions", desc: "Premium quality doesn't have to break the bank. We offer competitive pricing without compromising on results." },
  { icon: Layers, title: "End-to-End Services", desc: "From concept to launch and beyond — we handle everything so you can focus on growing your business." },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Why Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Why Choose Us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {points.map((p) => (
            <div key={p.title} className="flex gap-5">
              <div className="w-12 h-12 rounded-lg bg-[image:var(--cta-gradient)] flex items-center justify-center shrink-0">
                <p.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
