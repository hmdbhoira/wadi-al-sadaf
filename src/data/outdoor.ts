// Outdoor & Pool Division - Product Data
// Target: Real estate developers, hotels, residential communities (Nakheel, DAMAC, Emaar, etc.)

export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  features: string[];
  specifications?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  heroImage: string;
  description: string;
  products: Product[];
  type: 'product';
}

// Category 1: Sun Loungers
const sunLoungers: Category = {
  id: 'sun-loungers',
  name: 'Sun Loungers',
  slug: 'sun-loungers',
  heroImage: '/images/furniture/sun-loungers/hero.jpg',
  description: 'Premium sun loungers for hotels, resorts, and residential communities. Our loungers combine comfort, durability, and elegant design to create the perfect poolside relaxation experience.',
  type: 'product',
  products: [
    {
      id: 'sun-lounger-eden',
      name: 'Sun Lounger Eden',
      slug: 'sun-lounger-eden',
      image: '/images/furniture/sun-loungers/sun-lounger-eden.jpg',
      description: 'Elegant curved design sun lounger with adjustable backrest. Perfect for luxury pool areas and beach clubs.',
      features: [
        'Adjustable backrest with multiple positions',
        'Weather-resistant materials',
        'Ergonomic curved design',
        'Stackable for easy storage',
        'UV-resistant finish'
      ],
      specifications: {
        'Material': 'Fiberglass-reinforced polypropylene',
        'Dimensions': 'Standard sizes available',
        'Weight Capacity': 'Up to 150 kg',
        'Colors': 'Multiple options available'
      }
    },
    {
      id: 'sun-lounger-alfa',
      name: 'Sun Lounger Alfa',
      slug: 'sun-lounger-alfa',
      image: '/images/furniture/sun-loungers/sun-lounger-alfa.jpg',
      description: 'Modern design sun lounger with padded cushion and aluminum frame. Ideal for upscale hospitality venues.',
      features: [
        'Padded cushion included',
        'Aluminum frame construction',
        'Five-position adjustable backrest',
        'Integrated armrests',
        'Quick-dry fabric'
      ],
      specifications: {
        'Frame': 'Powder-coated aluminum',
        'Cushion': 'Quick-dry foam with fabric cover',
        'Dimensions': 'Standard sizes available',
        'Weight Capacity': 'Up to 160 kg'
      }
    },
    {
      id: 'sun-lounger-wooden',
      name: 'Sun Lounger Wooden',
      slug: 'sun-lounger-wooden',
      image: '/images/furniture/sun-loungers/sun-lounger-wooden.jpg',
      description: 'Classic teak wood sun lounger with timeless appeal. Premium choice for luxury resorts and villas.',
      features: [
        'Solid teak wood construction',
        'Natural weather resistance',
        'Adjustable backrest',
        'Integrated wheels for mobility',
        'Foldable design'
      ],
      specifications: {
        'Material': 'Teak Wood',
        'Dimensions': 'Standard sizes available',
        'Finish': 'Natural oil finish',
        'Colors': 'Natural wood tones'
      }
    },
    {
      id: 'sun-lounger-rattan',
      name: 'Sun Lounger Rattan',
      slug: 'sun-lounger-rattan',
      image: '/images/furniture/sun-loungers/sun-lounger-rattan.jpg',
      description: 'Synthetic rattan sun lounger with contemporary styling. Combines aesthetic appeal with all-weather durability.',
      features: [
        'Hand-woven synthetic rattan',
        'Aluminum frame',
        'Cushion included',
        'Adjustable positions',
        'Fade-resistant material'
      ],
      specifications: {
        'Frame': 'Powder-coated aluminum',
        'Weave': 'PE Rattan',
        'Dimensions': 'Standard sizes available',
        'Cushion': 'Water-resistant fabric included'
      }
    },
    {
      id: 'sun-lounger-cushion',
      name: 'Sun Lounger with Cushion',
      slug: 'sun-lounger-cushion',
      image: '/images/furniture/sun-loungers/sun-lounger-cushion.jpg',
      description: 'Comfortable padded sun lounger with premium cushioning. Perfect for extended relaxation by the pool.',
      features: [
        'Thick padded cushion',
        'Removable and washable cover',
        'Rust-resistant frame',
        'Adjustable headrest',
        'Multiple color options'
      ],
      specifications: {
        'Frame': 'Steel with powder coating',
        'Cushion': 'Thick padded cushion included',
        'Dimensions': 'Standard sizes available',
        'Colors': 'Multiple options available'
      }
    }
  ]
};

// Category 2: Poolside & Outdoor Furniture
const poolsideOutdoorFurniture: Category = {
  id: 'poolside-outdoor-furniture',
  name: 'Poolside & Outdoor Furniture',
  slug: 'poolside-outdoor-furniture',
  heroImage: '/images/furniture/poolside-outdoor-furniture/hero.jpg',
  description: 'Complete poolside and outdoor furniture solutions including tables, chairs, umbrellas, and shade structures. Durable designs built to withstand the Middle East climate.',
  type: 'product',
  products: [
    {
      id: 'poolside-table',
      name: 'Center / Side Table',
      slug: 'poolside-table',
      image: '/images/furniture/poolside-outdoor-furniture/poolside-table.jpg',
      description: 'Versatile poolside table perfect for drinks and accessories. Complements any sun lounger setup.',
      features: [
        'Compact design',
        'Weather-resistant materials',
        'Easy to clean surface',
        'Lightweight and portable',
        'Stackable design'
      ],
      specifications: {
        'Material': 'Polypropylene',
        'Sizes': 'Various sizes available',
        'Weight': 'Lightweight design',
        'Colors': 'Multiple options available'
      }
    },
    {
      id: 'plastic-chairs',
      name: 'Plastic Chairs',
      slug: 'plastic-chairs',
      image: '/images/furniture/poolside-outdoor-furniture/plastic-chairs.jpg',
      description: 'Durable plastic chairs suitable for outdoor dining and casual seating areas around pools and patios.',
      features: [
        'High-impact polypropylene',
        'Stackable up to 12 chairs',
        'UV-stabilized material',
        'Easy maintenance',
        'Multiple colors available'
      ],
      specifications: {
        'Material': 'Virgin polypropylene',
        'Sizes': 'Standard sizes available',
        'Weight Capacity': 'Standard load capacity',
        'Colors': 'Multiple options available'
      }
    },
    {
      id: 'umbrella-cantilever',
      name: 'Umbrella Cantilever',
      slug: 'umbrella-cantilever',
      image: '/images/furniture/poolside-outdoor-furniture/umbrella-cantilever.webp',
      description: 'Large cantilever umbrella providing maximum shade coverage. Perfect for pool decks and outdoor dining areas.',
      features: [
        'Offset pole design',
        '360-degree rotation',
        'Tilt adjustment',
        'Crank opening mechanism',
        'UV-protective fabric'
      ],
      specifications: {
        'Canopy': 'Various sizes available',
        'Pole Material': 'Aluminum',
        'Fabric': 'UV-protective polyester',
        'Colors': 'Multiple options available'
      }
    },
    {
      id: 'umbrella-aluminum',
      name: 'Umbrella - Aluminum Finish',
      slug: 'umbrella-aluminum',
      image: '/images/furniture/poolside-outdoor-furniture/umbrella-aluminum.jpg',
      description: 'Classic center-pole umbrella with premium aluminum construction. Ideal for cafes and poolside settings.',
      features: [
        'Lightweight aluminum pole',
        'Push-button tilt',
        'Wind vents for stability',
        'Fade-resistant canopy',
        'Easy operation'
      ],
      specifications: {
        'Canopy': 'Various sizes available',
        'Frame': 'Aluminum pole',
        'Fabric': 'Polyester canopy',
        'Colors': 'Multiple options available'
      }
    },
    {
      id: 'umbrella-wooden',
      name: 'Umbrella - Wooden Finish',
      slug: 'umbrella-wooden',
      image: '/images/furniture/poolside-outdoor-furniture/umbrella-wooden.jpg',
      description: 'Traditional wooden umbrella adding natural elegance to any outdoor space. Premium hardwood construction.',
      features: [
        'Solid hardwood pole',
        'Rope pulley system',
        'Natural aesthetic',
        'Durable construction',
        'Classic design'
      ],
      specifications: {
        'Canopy': 'Various sizes available',
        'Pole Material': 'Hardwood',
        'Fabric': 'Cotton/Polyester blend',
        'Colors': 'Natural wood finish'
      }
    },
    {
      id: 'umbrella-base',
      name: 'Umbrella Base - Granite/Concrete',
      slug: 'umbrella-base',
      image: '/images/furniture/poolside-outdoor-furniture/umbrella-base.jpg',
      description: 'Heavy-duty umbrella base providing stable support for all umbrella types. Available in granite and concrete finishes.',
      features: [
        'Heavy-duty construction',
        'Stable in windy conditions',
        'Adjustable pole adapter',
        'Premium finish options',
        'Wheels for mobility'
      ],
      specifications: {
        'Material': 'Granite or Concrete options',
        'Weight': 'Heavy-duty construction',
        'Compatibility': 'Fits standard umbrella poles',
        'Features': 'Wheels available for mobility'
      }
    }
  ]
};

// Category 3: Life Saving & Pool Safety
const lifeSavingPoolSafety: Category = {
  id: 'life-saving-pool-safety',
  name: 'Life Saving & Pool Safety',
  slug: 'life-saving-pool-safety',
  heroImage: '/images/furniture/life-saving-pool-safety/hero.jpg',
  description: 'Essential pool safety and life saving equipment for compliance and protection. Trusted by hotels, water parks, and residential communities across the Middle East.',
  type: 'product',
  products: [
    {
      id: 'life-jacket',
      name: 'Life Jacket',
      slug: 'life-jacket',
      image: '/images/furniture/life-saving-pool-safety/life-jacket.jpg',
      description: 'Professional-grade life jacket for water safety. Essential equipment for pools, beaches, and marine activities.',
      features: [
        'High buoyancy foam',
        'Adjustable straps',
        'Reflective strips',
        'Whistle included',
        'Multiple sizes available'
      ],
      specifications: {
        'Buoyancy': 'Standard flotation rating',
        'Material': 'Nylon outer, EPE foam',
        'Sizes': 'Child and Adult sizes available',
        'Certification': 'Safety certified'
      }
    },
    {
      id: 'life-buoy-ring',
      name: 'Life Buoy Ring',
      slug: 'life-buoy-ring',
      image: '/images/furniture/life-saving-pool-safety/life-buoy-ring.jpg',
      description: 'Standard life buoy ring for emergency rescue situations. Mandatory safety equipment for all pool facilities.',
      features: [
        'High-visibility orange color',
        'Reflective tape strips',
        'Grab rope included',
        'UV-resistant material',
        'Lightweight yet durable'
      ],
      specifications: {
        'Size': 'Standard dimensions',
        'Material': 'High-density polyethylene',
        'Buoyancy': 'Meets safety standards',
        'Rope': 'Included with ring'
      }
    },
    {
      id: 'rescue-tube',
      name: 'Rescue Tube',
      slug: 'rescue-tube',
      image: '/images/furniture/life-saving-pool-safety/rescue-tube.jpg',
      description: 'Professional rescue tube used by lifeguards for water rescues. Flexible design allows wrapping around victims.',
      features: [
        'Flexible vinyl construction',
        'Shoulder strap included',
        'High-visibility color',
        'Durable clip closure',
        'Floats multiple persons'
      ],
      specifications: {
        'Size': 'Standard professional length',
        'Material': 'Vinyl-coated foam',
        'Buoyancy': 'Multi-person support',
        'Strap': 'Adjustable shoulder strap'
      }
    },
    {
      id: 'rescue-can',
      name: 'Rescue Can',
      slug: 'rescue-can',
      image: '/images/furniture/life-saving-pool-safety/rescue-can.webp',
      description: 'Professional rescue can (torpedo buoy) for lifeguard water rescues. Rigid design provides stable flotation support.',
      features: [
        'Rigid plastic construction',
        'Multiple grab handles',
        'Shoulder strap included',
        'High-visibility color',
        'Durable and long-lasting'
      ],
      specifications: {
        'Size': 'Standard professional size',
        'Material': 'High-density polyethylene',
        'Buoyancy': 'Multi-person support',
        'Color': 'High-visibility colors'
      }
    },
    {
      id: 'rescue-hook',
      name: 'Rescue Hook / Life Hook',
      slug: 'rescue-hook',
      image: '/images/furniture/life-saving-pool-safety/rescue-hook.jpg',
      description: 'Extended reach rescue hook for pulling swimmers to safety from poolside. Essential lifeguard equipment.',
      features: [
        'Telescopic pole option',
        'Smooth rounded hook',
        'Lightweight aluminum',
        'Non-slip grip',
        'Wall mounting bracket'
      ],
      specifications: {
        'Length': 'Multiple lengths available',
        'Material': 'Anodized aluminum',
        'Hook': 'Smooth ABS plastic',
        'Design': 'Lightweight and durable'
      }
    },
    {
      id: 'spine-board',
      name: 'Spine Board with Head Immobilizer',
      slug: 'spine-board',
      image: '/images/furniture/life-saving-pool-safety/spine-board.jpg',
      description: 'Emergency spine board for safe victim transport. Critical equipment for serious pool incidents.',
      features: [
        'Full-length immobilization',
        'Head immobilizer included',
        'Multiple hand holds',
        'X-ray translucent',
        'Easy to clean'
      ],
      specifications: {
        'Size': 'Full-length adult size',
        'Material': 'High-density polyethylene',
        'Capacity': 'Standard weight capacity',
        'Features': 'X-ray translucent, easy to clean'
      }
    },
    {
      id: 'lifeguard-chair-wooden',
      name: 'Lifeguard Chair - Wooden',
      slug: 'lifeguard-chair-wooden',
      image: '/images/furniture/life-saving-pool-safety/lifeguard-chair-wooden.jpg',
      description: 'Classic wooden lifeguard chair providing elevated observation point. Available in 2, 3, and 4 step heights.',
      features: [
        'Solid wood construction',
        'Weather-treated finish',
        'Comfortable seat design',
        'Footrest included',
        'Umbrella holder option'
      ],
      specifications: {
        'Heights': 'Multiple height options',
        'Material': 'Treated hardwood',
        'Design': 'Comfortable with footrest',
        'Options': 'Umbrella holder available'
      }
    },
    {
      id: 'lifeguard-chair-stainless',
      name: 'Lifeguard Chair - Stainless Steel',
      slug: 'lifeguard-chair-stainless',
      image: '/images/furniture/life-saving-pool-safety/lifeguard-chair-stainless.webp',
      description: 'Premium stainless steel lifeguard chair for maximum durability. Ideal for commercial and public pools.',
      features: [
        'Marine-grade stainless steel',
        'Corrosion resistant',
        'Modern aesthetic',
        'Integrated umbrella mount',
        'Non-slip steps'
      ],
      specifications: {
        'Material': 'Marine-grade stainless steel',
        'Heights': 'Multiple options available',
        'Capacity': 'Standard weight capacity',
        'Finish': 'Polished or brushed options'
      }
    },
    {
      id: 'first-aid-box',
      name: 'First Aid Box',
      slug: 'first-aid-box',
      image: '/images/furniture/life-saving-pool-safety/first-aid-box.jpg',
      description: 'Comprehensive first aid kit for poolside emergencies. Fully stocked with essential medical supplies.',
      features: [
        'Wall-mountable design',
        'Clearly marked contents',
        'Waterproof case',
        'Complete supplies included',
        'Refill packs available'
      ],
      specifications: {
        'Case': 'Waterproof ABS Plastic',
        'Contents': 'Complete supplies included',
        'Mount': 'Wall-mountable design',
        'Refills': 'Refill packs available'
      }
    }
  ]
};

// Category 4: Camp & Staff Supplies
const campStaffSupplies: Category = {
  id: 'camp-staff-supplies',
  name: 'Camp & Staff Supplies',
  slug: 'camp-staff-supplies',
  heroImage: '/images/furniture/camp-staff-supplies/hero.jpg',
  description: 'Complete solutions for worker camps and staff facilities. From accommodation essentials to safety equipment, we provide everything needed to outfit your sites with bulk ordering options.',
  type: 'product',
  products: [
    {
      id: 'staff-equipment',
      name: 'Staff Equipment & Accommodation',
      slug: 'staff-equipment',
      image: '/images/furniture/camp-staff-supplies/staff-equipment.png',
      description: 'Complete staff accommodation and personal safety equipment for worker camps and facilities. We supply everything from beds and storage to PPE and uniforms - individual items or complete packages available.',
      features: [
        'Beds & Furniture: Bunk beds, single beds, steel lockers, wardrobes, bedside cabinets, metal cabinets, storage shelving',
        'Bedding & Comfort: Foam mattresses, bedding sets, blankets, pillows, comforters',
        'Footwear: Safety shoes, executive safety shoes, gum boots',
        'Uniforms & Workwear: Coveralls, pant & shirt sets, safety vests, executive vests, freezer jackets, disposable coveralls',
        'Personal Protective Equipment: Safety helmets, safety goggles, work gloves, welding gloves, safety harnesses, ear protection, masks & respirators',
        'Facility Equipment: Water coolers, water containers, water boilers, gas stoves, waste bins, recycling bins',
        'Emergency Equipment: Eye wash stations, fire blankets, first aid kits, folding stretchers, spill kits'
      ],
      specifications: {
        'Order Type': 'Single items or bulk quantities',
        'Customization': 'Sizes and colors as per requirement',
        'Quality': 'Industrial-grade materials',
        'Compliance': 'Safety certified equipment'
      }
    },
    {
      id: 'roadside-safety',
      name: 'Roadside & Site Safety',
      slug: 'roadside-safety',
      image: '/images/furniture/camp-staff-supplies/roadside-safety.png',
      description: 'Complete roadside and construction site safety equipment for traffic control, hazard marking, and site management. Essential supplies for construction sites and road works.',
      features: [
        'Traffic Control: Traffic cones, delineator posts, road barriers, expandable barriers',
        'Signaling Equipment: Traffic batons, solar warning lights, megaphones with sirens',
        'Safety Mirrors: Convex mirrors for blind spots and intersections',
        'Hazard Marking: Warning tapes, barrier tapes in various patterns',
        'Emergency Lights: Flashing beacons, solar-powered warning lights',
        'All equipment available in high-visibility colors with reflective options'
      ],
      specifications: {
        'Order Type': 'Single items or bulk quantities',
        'Visibility': 'High-visibility and reflective options',
        'Durability': 'Weather-resistant materials',
        'Standards': 'Compliant with safety regulations'
      }
    }
  ]
};

// Export all categories
export const outdoorCategories: Category[] = [
  sunLoungers,
  poolsideOutdoorFurniture,
  lifeSavingPoolSafety,
  campStaffSupplies
];

// Helper to get category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return outdoorCategories.find((cat) => cat.slug === slug);
};

// Helper to get product by slug within a category
export const getProductBySlug = (categorySlug: string, productSlug: string): Product | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.products.find((prod) => prod.slug === productSlug);
};

// Get all products across all categories
export const getAllProducts = (): Product[] => {
  return outdoorCategories.flatMap((cat) => cat.products);
};
