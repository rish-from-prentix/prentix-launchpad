import { Phone, Mail, MessageCircle } from "lucide-react";
import PrentixIcon from "./PrentixIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-16 md:py-24 border-t border-border/50">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Contact Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Contact us</h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              We're on a mission to close the employability gap at scale by helping every student realise their full
              potential. If you're a student, a university, a brand looking to partner, or simply someone who believes
              in what we're building, we'd love to hear from you.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              {/* Phone */}
              <a
                href="tel:+919003312721"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>(+91) 9003312721</span>
              </a>

              {/* Email */}
              <a
                href="mailto:Hello@prentix.ai"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>Hello@prentix.ai</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919003312721?text=Hello%20Prentix"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/50 mb-12" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <PrentixIcon size={28} />
              <span className="font-semibold text-foreground">Prentix</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie policy
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">© {currentYear} Prentix</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
