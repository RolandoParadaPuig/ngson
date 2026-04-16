import { Warehouse, Package, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const services = [
  {
    icon: Warehouse,
    accent: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
    border: 'border-blue-100 dark:border-blue-900/40',
    badge: 'bg-blue-600',
    title: 'Commercial Warehouses',
    description:
      'Large-format industrial spaces engineered for distribution, light manufacturing, e-commerce fulfillment, and logistics operations. Every unit is move-in ready with robust infrastructure to support demanding business operations.',
    features: [
      'Up to 10,000 sq ft available',
      'Dock-high & grade-level loading',
      'Up to 30-ft clear height ceilings',
      '3-phase electrical power',
      'Fire sprinkler systems',
      'Ample truck & employee parking',
      'Flexible lease terms',
      '24/7 secure facility access',
    ],
    cta: 'Inquire About Warehouses',
  },
  {
    icon: Package,
    accent: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-100 dark:border-emerald-900/40',
    badge: 'bg-emerald-600',
    title: 'Storage Units',
    description:
      'Secure, climate-controlled storage units in a wide range of sizes, built for businesses needing overflow inventory space, document archiving, or equipment storage — without the burden of long-term lease commitments.',
    features: [
      'Sizes from 100 to 1,000 sq ft',
      '24/7 keypad-secured access',
      'Climate-controlled units available',
      'HD surveillance throughout',
      'Drive-up ground-floor units',
      'Month-to-month flexibility',
      'Tenant insurance available',
      'Indoor elevator access',
    ],
    cta: 'Inquire About Storage',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight text-balance mb-4">
              Space Solutions Designed for Business
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Whether you need a large-scale commercial facility or a secure place to store your
              inventory, NGson has the right solution — backed by decades of local expertise.
            </p>
          </AnimatedSection>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.1} direction={i === 0 ? 'left' : 'right'}>
              <div
                className={`h-full bg-white dark:bg-slate-800 rounded-3xl border ${svc.border} p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${svc.accent} flex items-center justify-center mb-6`}
                >
                  <svc.icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {svc.description}
                </p>

                {/* Features grid */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8 flex-1">
                  {svc.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle
                        size={14}
                        className="text-blue-500 dark:text-blue-400 shrink-0"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${svc.badge} text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 w-fit`}
                >
                  {svc.cta}
                  <ArrowRight size={15} />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
