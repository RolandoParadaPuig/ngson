import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const MAP_SRC =
  'https://maps.google.com/maps?q=Doral+FL+33178&output=embed&z=14&hl=en';

const details = [
  {
    icon: MapPin,
    label: 'Address',
    lines: ['1234 NW 107th Ave', 'Doral, FL 33178'],
    link: 'https://maps.google.com/?q=1234+NW+107th+Ave+Doral+FL+33178',
    linkLabel: 'Get Directions',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    lines: ['Mon – Fri: 8:00 AM – 6:00 PM', 'Saturday: 9:00 AM – 2:00 PM', 'Sunday: Closed'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+1 (305) 000-0000'],
    link: 'tel:+13050000000',
    linkLabel: 'Call Us',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@ngson.com'],
    link: 'mailto:info@ngson.com',
    linkLabel: 'Send Email',
  },
];

export default function Location() {
  return (
    <section id="location" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
              Find Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight text-balance mb-4">
              Conveniently Located in Doral, FL
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Situated in Miami-Dade County's premier industrial zone, with easy access to major
              highways, Miami International Airport, and PortMiami.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 aspect-[4/3] lg:aspect-auto lg:h-[460px]">
              <iframe
                src={MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NGson Location — Doral, FL"
              />
            </div>
          </AnimatedSection>

          {/* Details */}
          <AnimatedSection direction="right" delay={0.1} className="lg:col-span-2 flex flex-col gap-4">
            {details.map((d, i) => (
              <div
                key={d.label}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                    <d.icon size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                      {d.label}
                    </div>
                    {d.lines.map((line) => (
                      <div
                        key={line}
                        className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-snug"
                      >
                        {line}
                      </div>
                    ))}
                    {d.link && (
                      <a
                        href={d.link}
                        target={d.link.startsWith('http') ? '_blank' : undefined}
                        rel={d.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1 mt-2 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline"
                      >
                        {d.linkLabel}
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Badges */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 text-white">
              <div className="font-semibold mb-1">Near Major Highways</div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Easy access via SR-836, Florida's Turnpike, and I-75. Located minutes from Miami
                International Airport.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
