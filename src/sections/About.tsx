import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Trusted Since 2004",
    desc: "Two decades of reliable property management with a proven track record in South Florida's industrial market.",
  },
  {
    icon: Users,
    title: "Family-Owned & Operated",
    desc: "Every decision is made by people personally invested in your satisfaction - not a faceless corporation.",
  },
  {
    icon: Clock,
    title: "Fast Response, Every Time",
    desc: "When you need something, we are here. Maintenance requests and inquiries handled promptly, always.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={ABOUT_IMAGE}
                alt="Inside an NGson warehouse facility"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-5 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                  <ShieldCheck size={22} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-lg leading-none">
                    20+ Years
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
                    of trusted service
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blob */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-50 dark:bg-blue-950/40 rounded-full blur-3xl -z-10" />
          </AnimatedSection>

          {/* Text column */}
          <div className="flex flex-col gap-6">
            <AnimatedSection delay={0.05}>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Our Story
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight text-balance">
                A Family Legacy Built on Trust and Reliability
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Founded over two decades ago, NGson began as a modest family venture with a single
                warehouse in the heart of Doral and an unwavering commitment to treat every tenant
                like a neighbor. What started with handshakes and hard work has grown into one of
                South Florida's most trusted names in commercial and storage property management.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We believe the right space changes everything. When a business has room to move, it
                has room to grow. That is why we maintain every property to the highest standard,
                respond quickly when you need us, and offer flexible arrangements that put your needs
                first.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Three generations of the Nguyen family stand behind every lease. When you rent with
                NGson, you are not just a tenant - you are part of the family.
              </p>
            </AnimatedSection>

            {/* Pillars */}
            <div className="grid gap-4 mt-2">
              {pillars.map((p, i) => (
                <AnimatedSection key={p.title} delay={0.3 + i * 0.08}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                      <p.icon size={18} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-0.5">
                        {p.title}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        {p.desc}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <AnimatedSection delay={0.1} className="mt-20">
          <motion.div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            {[
              { value: "20+", label: "Years in Operation" },
              { value: "50+", label: "Available Units" },
              { value: "200+", label: "Satisfied Clients" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                  {s.value}
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-sm mt-2">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
