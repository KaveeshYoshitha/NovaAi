import { Sparkles, Twitter, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Dashboard", "Integrations"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "API Reference", "Community"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer className="relative bg-black border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl text-white">NovaAI</span>
            </div>
            <p className="text-purple-300/60 mb-6 max-w-xs">
              Your intelligent partner for automation. Empowering teams with AI-driven solutions.
            </p>
            
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg backdrop-blur-xl bg-white/5 border border-purple-500/20 hover:border-purple-400/50 flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-purple-300/60 hover:text-purple-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-purple-300/60 text-sm">
            © 2025 NovaAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-purple-300/60 hover:text-purple-300 transition-colors">
              Status
            </a>
            <a href="#" className="text-purple-300/60 hover:text-purple-300 transition-colors">
              Changelog
            </a>
            <a href="#" className="text-purple-300/60 hover:text-purple-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
