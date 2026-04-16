import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Location from './sections/Location';
import Contact from './sections/Contact';
import Logo from './components/Logo';
import { useDarkMode } from './hooks/useDarkMode';

function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo variant="light" size="md" />
            <p className="text-sm text-slate-500">Reliable Spaces for Growing Businesses</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Location', href: '#location' },
              { label: 'Contact', href: '#contact' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end gap-1 text-sm text-slate-500">
            <span>1234 NW 107th Ave, Doral, FL 33178</span>
            <a href="tel:+13050000000" className="hover:text-white transition-colors">
              +1 (305) 000-0000
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} NGson Property Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} onToggle={toggle} />

      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Location />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
