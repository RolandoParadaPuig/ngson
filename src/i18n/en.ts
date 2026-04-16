/**
 * English content strings.
 * To add a new language, duplicate this file (e.g., es.ts) and translate the values.
 * The keys must stay identical across all language files.
 */
const en = {
  nav: {
    about: "About",
    services: "Services",
    gallery: "Gallery",
    location: "Location",
    contact: "Contact",
    cta: "Contact Us",
  },

  hero: {
    tagline: "Reliable Spaces for Growing Businesses",
    subtitle:
      "NGson provides premium commercial warehouses and flexible storage units in South Florida's most strategic industrial corridors. Space that works as hard as you do.",
    cta: "Get in Touch",
    secondary: "Explore Spaces",
    scroll: "Scroll to explore",
  },

  about: {
    badge: "Our Story",
    title: "A Family Legacy Built on Trust and Reliability",
    p1: "Founded over two decades ago, NGson began as a modest family venture with a single warehouse in the heart of Doral and a commitment to treat every tenant like a neighbor. What started with handshakes and hard work has grown into one of South Florida's most trusted names in commercial and storage property management.",
    p2: "We believe that the right space changes everything. When a business has room to move, it has room to grow. That is why we maintain every property to the highest standard, respond quickly when you need us, and offer flexible arrangements that put your needs first.",
    p3: "Three generations of the Nguyen family stand behind every lease. When you rent with NGson, you are not just a tenant - you are part of the family.",
    stats: {
      years: { value: "20+", label: "Years in Operation" },
      units: { value: "50+", label: "Available Units" },
      clients: { value: "200+", label: "Satisfied Clients" },
    },
  },

  services: {
    badge: "What We Offer",
    title: "Space Solutions Designed for Business",
    subtitle:
      "Whether you need a large-scale commercial facility or a secure place to store your inventory, NGson has the right solution.",
    commercial: {
      title: "Commercial Warehouses",
      description:
        "Large-format industrial spaces built for distribution, light manufacturing, e-commerce fulfillment, and logistics operations. High ceilings, grade-level and dock-high loading, robust power supply, and dedicated parking.",
      features: [
        "Up to 10,000 sq ft available",
        "Dock-high & grade-level loading",
        "Up to 30-ft clear heights",
        "3-phase electrical power",
        "Sprinkler systems",
        "Ample truck parking",
      ],
    },
    storage: {
      title: "Storage Units",
      description:
        "Secure, climate-controlled storage units available in a range of sizes - perfect for businesses needing overflow inventory space, document archiving, or equipment storage without long-term commitments.",
      features: [
        "Sizes from 100 to 1,000 sq ft",
        "24/7 secure access",
        "Climate-controlled options",
        "HD surveillance cameras",
        "Month-to-month flexibility",
        "Drive-up units available",
      ],
    },
  },

  gallery: {
    badge: "Available Spaces",
    title: "Find the Right Fit for Your Business",
    subtitle:
      "Browse our current inventory of commercial and storage units. Every space is move-in ready and professionally maintained.",
    filterAll: "All",
    filterCommercial: "Commercial",
    filterStorage: "Storage",
    inquire: "Inquire Now",
  },

  location: {
    badge: "Find Us",
    title: "Conveniently Located in Doral, FL",
    subtitle:
      "Situated in one of Miami-Dade County's premier industrial zones, with easy access to major highways, Miami International Airport, and PortMiami.",
    address: {
      label: "Address",
      value: "1234 NW 107th Ave, Doral, FL 33178",
    },
    hours: {
      label: "Office Hours",
      weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
      saturday: "Saturday: 9:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
    },
    phone: {
      label: "Phone",
      value: "+1 (305) 000-0000",
    },
    email: {
      label: "Email",
      value: "info@ngson.com",
    },
    directions: "Get Directions",
  },

  contact: {
    badge: "Contact Us",
    title: "Let's Find Your Perfect Space",
    subtitle:
      "Fill out the form below or reach us directly on WhatsApp. We respond within one business day.",
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number (optional)",
      service: "Service Interest",
      serviceOptions: {
        placeholder: "Select a service",
        commercial: "Commercial Warehouse",
        storage: "Storage Unit",
        general: "General Inquiry",
      },
      message: "Your Message",
      submit: "Send Message",
      submitting: "Sending...",
      success: "Message sent! We will be in touch within one business day.",
      error: "Something went wrong. Please try again or contact us via WhatsApp.",
    },
    whatsapp: {
      label: "Chat on WhatsApp",
      number: "+13050000000",
      message: "Hello! I am interested in renting a space at NGson. Can you tell me more?",
    },
  },

  footer: {
    tagline: "Reliable Spaces for Growing Businesses",
    copyright: "2024 NGson Property Management. All rights reserved.",
    links: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
    },
  },

  floating: {
    whatsapp: "Chat with us",
  },
} as const;

export type Content = typeof en;
export default en;
