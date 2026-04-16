import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ListingCard from '../components/ListingCard';
import { listings, ListingCategory } from '../data/listings';

type Filter = ListingCategory | 'all';

const filters: { label: string; value: Filter }[] = [
  { label: 'All Spaces', value: 'all' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Storage', value: 'storage' },
];

export default function Gallery() {
  const [active, setActive] = useState<Filter>('all');

  const filtered = useMemo(
    () => (active === 'all' ? listings : listings.filter((l) => l.category === active)),
    [active]
  );

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
              Available Spaces
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight text-balance mb-4">
              Find the Right Fit for Your Business
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Browse our current inventory of commercial and storage units. Every space is move-in
              ready and professionally maintained.
            </p>
          </AnimatedSection>
        </div>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1} className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === f.value
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {active === f.value && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-blue-600 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((listing, i) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <ListingCard listing={listing} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA strip */}
        <AnimatedSection delay={0.1} className="mt-14 text-center">
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Don't see what you're looking for? We may have unlisted units available.
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Request a Custom Inquiry
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
