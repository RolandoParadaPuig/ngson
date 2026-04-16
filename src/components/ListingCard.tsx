import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Maximize2 } from 'lucide-react';
import { Listing } from '../data/listings';

interface Props {
  listing: Listing;
}

export default function ListingCard({ listing }: Props) {
  const handleInquire = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.article
      className="card group flex flex-col h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
            listing.category === 'commercial'
              ? 'bg-blue-600 text-white'
              : 'bg-emerald-600 text-white'
          }`}
        >
          {listing.category === 'commercial' ? 'Commercial' : 'Storage'}
        </span>

        {/* Size badge */}
        <span className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 px-2.5 py-1 rounded-full text-xs font-medium">
          <Maximize2 size={11} />
          {listing.size}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-semibold text-slate-900 dark:text-white text-base leading-snug mb-2">
          {listing.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
          {listing.description}
        </p>

        {/* Features */}
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1 mb-5">
          {listing.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
              <CheckCircle size={12} className="text-blue-500 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={handleInquire}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200"
        >
          Inquire Now
          <ArrowRight size={15} />
        </button>
      </div>
    </motion.article>
  );
}
