import { Mail, Phone, MapPin } from "lucide-react";

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
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/60">
                <Mail className="w-4 h-4 shrink-0" /> swastiktechnologyandsolutions@gmail.com
              </li>
              <li className="flex items-center gap-3 text-sm text-background/60">
                <Phone className="w-4 h-4 shrink-0" /> +91 8010705057
                <Phone className="w-4 h-4 shrink-0" /> +91 9503354113
              </li>
              <li className="flex items-center gap-3 text-sm text-background/60">
                <MapPin className="w-4 h-4 shrink-0" /> India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} SWASTIK Tech Solutions. All rights reserved.
          </p>
         <div className="flex gap-4">
          {[
            { name: "LinkedIn", link: "https://www.linkedin.com/company/swastik-tech-solutions" },
            { name: "Instagram", link: "https://www.instagram.com/swastiktechnosolutions?igsh=MTZlem50OXJwcG12ag==" }

          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
               className="
        text-sm 
        sm:text-base 
        md:text-lg 
        lg:text-xl 
        text-background/40 
        hover:text-background 
        transition-colors
      "
            >
              {item.name}
            </a>
          ))}
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
