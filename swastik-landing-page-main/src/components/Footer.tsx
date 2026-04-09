import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const services = ["Web Development", "Mobile Apps", "Graphics Design", "Digital Marketing", "Social Media", "Game Development"];

  return (
    <footer id="contact" className="bg-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-xl font-bold text-background mb-4">
              SWASTIK<span className="text-primary"> Tech</span>
            </h3>
            <p className="text-sm leading-relaxed text-background/60">
              Building digital solutions that help your business grow and succeed in the modern world.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-background/60 hover:text-background transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-background/60">
                <Mail className="w-4 h-4 shrink-0" />
                <a
                  href="mailto:swastiktechnologyandsolutions@gmail.com"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                  aria-label="Send email to Swastik Tech Solutions"
                >
                  swastiktechnologyandsolutions@gmail.com
                </a>
              </li>
              <li className="flex flex-col gap-2 text-sm text-background/60">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a
                    href="tel:+918010705057"
                    className="text-sm text-background/60 hover:text-background transition-colors"
                    aria-label="Call Swastik Tech Solutions on +91 8010705057"
                  >
                    +91 8010705057
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a
                    href="tel:+919503354113"
                    className="text-sm text-background/60 hover:text-background transition-colors"
                    aria-label="Call Swastik Tech Solutions on +91 9503354113"
                  >
                    +91 9503354113
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/60">
                <MapPin className="w-4 h-4 shrink-0" /> India
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/company/swastik-tech-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/20 bg-background/5 text-background/70 transition duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/swastiktechnosolutions?igsh=MTZlem50OXJwcG12ag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Instagram profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/20 bg-background/5 text-background/70 transition duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-orange-400 hover:text-white"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} SWASTIK Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
