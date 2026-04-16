export type ListingCategory = 'commercial' | 'storage';

export interface Listing {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: ListingCategory;
  size: string;
  features: string[];
  available: boolean;
}

export const listings: Listing[] = [
  {
    id: 'bay-a',
    title: 'Bay A — Large Distribution Warehouse',
    description:
      'Expansive 8,000 sq ft warehouse with 28-ft clear-height ceilings, two dock-high loading doors, and dedicated truck court. Ideal for distribution hubs and e-commerce fulfillment operations.',
    imageUrl:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop',
    category: 'commercial',
    size: '8,000 sq ft',
    features: ['2 dock-high doors', '28-ft ceilings', '3-phase power', 'Sprinkler system'],
    available: true,
  },
  {
    id: 'bay-b',
    title: 'Bay B — Mid-Size Commercial Unit',
    description:
      'Versatile 3,500 sq ft commercial bay with grade-level access, polished concrete floors, and a private office suite. Perfect for light manufacturing, showrooms, or logistics operations.',
    imageUrl:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80&auto=format&fit=crop',
    category: 'commercial',
    size: '3,500 sq ft',
    features: ['Grade-level loading', 'Private office suite', '24-ft ceilings', 'LED lighting'],
    available: true,
  },
  {
    id: 'bay-c',
    title: 'Bay C — Corner End-Cap Unit',
    description:
      'Highly visible 2,200 sq ft corner unit with double-frontage, ideal for businesses that value accessibility and curb appeal. Includes a ground-floor office space and mezzanine storage.',
    imageUrl:
      'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80&auto=format&fit=crop',
    category: 'commercial',
    size: '2,200 sq ft',
    features: ['Double frontage', 'Mezzanine included', 'Corner visibility', 'ADA compliant'],
    available: true,
  },
  {
    id: 'unit-101',
    title: 'Unit 101 — Climate Storage Suite',
    description:
      'Premium 800 sq ft climate-controlled storage unit maintained at 68–75°F year-round. Perfect for sensitive inventory, electronics, artwork, or medical supplies requiring a stable environment.',
    imageUrl:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop',
    category: 'storage',
    size: '800 sq ft',
    features: ['Climate controlled', '24/7 access', 'HD surveillance', 'Drive-up access'],
    available: true,
  },
  {
    id: 'unit-205',
    title: 'Unit 205 — Business Storage Suite',
    description:
      'Secure 400 sq ft storage unit on the second floor with elevator access. A smart solution for growing businesses that need reliable overflow space without long-term commitments.',
    imageUrl:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop',
    category: 'storage',
    size: '400 sq ft',
    features: ['Elevator access', 'Month-to-month', 'Digital lock', 'Insurance available'],
    available: true,
  },
  {
    id: 'unit-312',
    title: 'Unit 312 — Economy Storage',
    description:
      'Affordable 200 sq ft storage unit with drive-up access — a no-frills, secure option for businesses looking to store pallets, supplies, or archived documents at a competitive rate.',
    imageUrl:
      'https://images.unsplash.com/photo-1568598035424-87b8d0dbf7cb?w=800&q=80&auto=format&fit=crop',
    category: 'storage',
    size: '200 sq ft',
    features: ['Drive-up access', 'Competitive pricing', '24/7 security', 'Flexible terms'],
    available: true,
  },
];
