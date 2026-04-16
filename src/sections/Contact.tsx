import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const PHONE = '13050000000';
const WA_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in renting a space at NGson. Can you share more details about availability?"
);

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const EMPTY: FormData = { name: '', email: '', phone: '', service: '', message: '' };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^\+?[\d\s\-(). ]{7,}$/.test(phone.trim());
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.trim()) errs.email = 'Email address is required.';
    else if (!isValidEmail(form.email)) errs.email = 'Please enter a valid email.';
    if (form.phone.trim() && !isValidPhone(form.phone)) errs.phone = 'Please enter a valid phone number.';
    if (!form.service) errs.service = 'Please select a service.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    // Simulate async submission
    setTimeout(() => {
      setStatus('success');
      setForm(EMPTY);
    }, 1400);
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500';
  const inputNormal = `${inputBase} border-slate-200 dark:border-slate-700`;
  const inputError = `${inputBase} border-red-400 dark:border-red-500 ring-1 ring-red-300`;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight text-balance mb-4">
              Let's Find Your Perfect Space
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Fill out the form below or reach us directly on WhatsApp. We respond within one
              business day.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Message Sent!
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                      Thank you for reaching out. We'll be in touch within one business day.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className={errors.name ? inputError : inputNormal}
                        />
                        {errors.name && (
                          <p role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className={errors.email ? inputError : inputNormal}
                        />
                        {errors.email && (
                          <p role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone + Service */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Phone Number{' '}
                          <span className="text-slate-400 font-normal">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (305) 000-0000"
                          className={errors.phone ? inputError : inputNormal}
                        />
                        {errors.phone && (
                          <p role="alert" className="mt-1 text-xs text-red-500">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Service Interest <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={errors.service ? inputError : inputNormal}
                        >
                          <option value="">Select a service</option>
                          <option value="commercial">Commercial Warehouse</option>
                          <option value="storage">Storage Unit</option>
                          <option value="general">General Inquiry</option>
                        </select>
                        {errors.service && (
                          <p role="alert" className="mt-1 text-xs text-red-500">{errors.service}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about the space you're looking for — size, timeline, any specific requirements..."
                        className={`resize-none ${errors.message ? inputError : inputNormal}`}
                      />
                      {errors.message && (
                        <p role="alert" className="mt-1 text-xs text-red-500">{errors.message}</p>
                      )}
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 dark:bg-red-950/30 rounded-xl p-3">
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or contact us via WhatsApp.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg
                            className="animate-spin w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* Side info */}
          <AnimatedSection direction="right" delay={0.1} className="lg:col-span-2 flex flex-col gap-5">
            {/* WhatsApp card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <MessageCircle size={22} />
              </div>
              <h3 className="font-bold text-lg mb-2">Prefer WhatsApp?</h3>
              <p className="text-green-100 text-sm leading-relaxed mb-5">
                Message us directly — it's the fastest way to reach our team and get a quick
                answer about availability.
              </p>
              <a
                href={`https://wa.me/${PHONE}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-green-700 font-semibold text-sm hover:bg-green-50 transition-colors"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Direct contact */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-6 flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Direct Contact</h3>
              <a
                href="tel:+13050000000"
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Phone size={15} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">Call us</div>
                  <div className="font-medium text-sm">+1 (305) 000-0000</div>
                </div>
              </a>
              <a
                href="mailto:info@ngson.com"
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Mail size={15} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">Email us</div>
                  <div className="font-medium text-sm">info@ngson.com</div>
                </div>
              </a>
            </div>

            {/* Trust note */}
            <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 p-5">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  No pressure, no commitments.
                </span>{' '}
                We're here to answer your questions and help you find the right space — on your
                timeline.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
