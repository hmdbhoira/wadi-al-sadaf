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

// Category 1: Sun Loungers & Poolside
const sunLoungersPoolside: Category = {
  id: 'sun-loungers-poolside',
  name: 'Sun Loungers & Poolside',
  slug: 'sun-loungers-poolside',
  heroImage: '/images/outdoor/sun-loungers-poolside/hero.jpg',
  description: 'Premium poolside furniture for hotels, resorts, and residential communities. Our sun loungers combine comfort, durability, and elegant design to create the perfect relaxation experience.',
  type: 'product',
  products: [
    {
      id: 'sun-lounger-eden',
      name: 'Sun Lounger Eden',
      slug: 'sun-lounger-eden',
      image: '/images/outdoor/sun-loungers-poolside/sun-lounger-eden.jpg',
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
        'Dimensions': '190 x 70 x 40 cm',
        'Weight Capacity': '150 kg',
        'Colors Available': 'White, Cream, Grey'
      }
    },
    {
      id: 'sun-lounger-alfa',
      name: 'Sun Lounger Alfa',
      slug: 'sun-lounger-alfa',
      image: '/images/outdoor/sun-loungers-poolside/sun-lounger-alfa.jpg',
      description: 'Modern design sun lounger with padded cushion and aluminum frame. Ideal for upscale hospitality venues.',
      features: [
        'Padded cushion included',
        'Aluminum frame construction',
        'Five-position adjustable backrest',
        'Integrated armrests',
        'Quick-dry fabric'
      ],
      specifications: {
        'Frame Material': 'Powder-coated aluminum',
        'Cushion Material': 'Quick-dry foam with fabric cover',
        'Dimensions': '200 x 75 x 35 cm',
        'Weight Capacity': '160 kg'
      }
    },
    {
      id: 'sun-lounger-wooden',
      name: 'Sun Lounger Wooden',
      slug: 'sun-lounger-wooden',
      image: '/images/outdoor/sun-loungers-poolside/sun-lounger-wooden.jpg',
      description: 'Classic teak wood sun lounger with timeless appeal. Premium choice for luxury resorts and villas.',
      features: [
        'Solid teak wood construction',
        'Natural weather resistance',
        'Adjustable backrest',
        'Integrated wheels for mobility',
        'Foldable design'
      ],
      specifications: {
        'Material': 'Grade-A Teak Wood',
        'Dimensions': '195 x 65 x 35 cm',
        'Weight': '18 kg',
        'Finish': 'Natural oil finish'
      }
    },
    {
      id: 'sun-lounger-rattan',
      name: 'Sun Lounger Rattan',
      slug: 'sun-lounger-rattan',
      image: '/images/outdoor/sun-loungers-poolside/sun-lounger-rattan.jpg',
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
        'Dimensions': '200 x 70 x 40 cm',
        'Cushion': 'Water-resistant fabric'
      }
    },
    {
      id: 'sun-lounger-cushion',
      name: 'Sun Lounger with Cushion',
      slug: 'sun-lounger-cushion',
      image: '/images/outdoor/sun-loungers-poolside/sun-lounger-cushion.jpg',
      description: 'Comfortable padded sun lounger with premium cushioning. Perfect for extended relaxation by the pool.',
      features: [
        'Thick padded cushion',
        'Removable and washable cover',
        'Rust-resistant frame',
        'Adjustable headrest',
        'Multiple color options'
      ],
      specifications: {
        'Frame Material': 'Steel with powder coating',
        'Cushion Thickness': '8 cm',
        'Dimensions': '190 x 65 x 40 cm',
        'Colors': 'Red, Blue, Beige, Green'
      }
    },
    {
      id: 'poolside-table',
      name: 'Center / Side Table',
      slug: 'poolside-table',
      image: '/images/outdoor/sun-loungers-poolside/poolside-table.jpg',
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
        'Dimensions': '45 x 45 x 45 cm',
        'Weight': '3 kg',
        'Colors': 'White, Grey, Brown'
      }
    }
  ]
};

// Category 2: Outdoor Furniture
const outdoorFurniture: Category = {
  id: 'outdoor-furniture',
  name: 'Outdoor Furniture',
  slug: 'outdoor-furniture',
  heroImage: '/images/outdoor/outdoor-furniture/hero.jpg',
  description: 'Complete outdoor furniture solutions for gardens, terraces, and common areas. Durable designs built to withstand the Middle East climate while maintaining elegance.',
  type: 'product',
  products: [
    {
      id: 'plastic-chair-italy',
      name: 'Plastic Chair - Italian Design',
      slug: 'plastic-chair-italy',
      image: '/images/outdoor/outdoor-furniture/plastic-chair-italy.jpg',
      description: 'Elegant Italian-designed plastic chair suitable for outdoor dining and casual seating areas.',
      features: [
        'Italian design aesthetics',
        'High-impact polypropylene',
        'Stackable up to 12 chairs',
        'UV-stabilized material',
        'Easy maintenance'
      ],
      specifications: {
        'Material': 'Virgin polypropylene',
        'Dimensions': '56 x 52 x 82 cm',
        'Seat Height': '45 cm',
        'Weight Capacity': '120 kg'
      }
    },
    {
      id: 'folding-table',
      name: 'Folding Table',
      slug: 'folding-table',
      image: '/images/outdoor/outdoor-furniture/folding-table.jpg',
      description: 'Heavy-duty folding table ideal for events, outdoor gatherings, and flexible space requirements.',
      features: [
        'Folds flat for storage',
        'Sturdy metal legs',
        'Scratch-resistant surface',
        'Portable design',
        'Multiple sizes available'
      ],
      specifications: {
        'Top Material': 'HDPE plastic',
        'Frame': 'Powder-coated steel',
        'Dimensions': '180 x 75 x 74 cm',
        'Folded Height': '10 cm'
      }
    },
    {
      id: 'umbrella-cantilever',
      name: 'Umbrella Cantilever',
      slug: 'umbrella-cantilever',
      image: '/images/outdoor/outdoor-furniture/umbrella-cantilever.jpg',
      description: 'Large cantilever umbrella providing maximum shade coverage. Perfect for pool decks and outdoor dining areas.',
      features: [
        'Offset pole design',
        '360-degree rotation',
        'Tilt adjustment',
        'Crank opening mechanism',
        'UV-protective fabric'
      ],
      specifications: {
        'Canopy Size': '3m x 3m',
        'Pole Material': 'Aluminum',
        'Fabric': 'Solution-dyed polyester',
        'UV Protection': 'UPF 50+'
      }
    },
    {
      id: 'umbrella-aluminum',
      name: 'Umbrella - Aluminum Finish',
      slug: 'umbrella-aluminum',
      image: '/images/outdoor/outdoor-furniture/umbrella-aluminum.jpg',
      description: 'Classic center-pole umbrella with premium aluminum construction. Ideal for cafes and poolside settings.',
      features: [
        'Lightweight aluminum pole',
        'Push-button tilt',
        'Wind vents for stability',
        'Fade-resistant canopy',
        'Easy operation'
      ],
      specifications: {
        'Canopy Diameter': '2.7m',
        'Pole Diameter': '38mm',
        'Height': '2.4m',
        'Material': 'Aluminum pole, Polyester canopy'
      }
    },
    {
      id: 'umbrella-wooden',
      name: 'Umbrella - Wooden Finish',
      slug: 'umbrella-wooden',
      image: '/images/outdoor/outdoor-furniture/umbrella-wooden.jpg',
      description: 'Traditional wooden umbrella adding natural elegance to any outdoor space. Premium hardwood construction.',
      features: [
        'Solid hardwood pole',
        'Rope pulley system',
        'Natural aesthetic',
        'Durable construction',
        'Classic design'
      ],
      specifications: {
        'Canopy Diameter': '2.5m',
        'Pole Material': 'Hardwood',
        'Canopy': 'Cotton/Polyester blend',
        'Pole Diameter': '48mm'
      }
    },
    {
      id: 'umbrella-base',
      name: 'Umbrella Base - Granite/Concrete',
      slug: 'umbrella-base',
      image: '/images/outdoor/outdoor-furniture/umbrella-base.jpg',
      description: 'Heavy-duty umbrella base providing stable support for all umbrella types. Available in granite and concrete finishes.',
      features: [
        'Heavy-duty construction',
        'Stable in windy conditions',
        'Adjustable pole adapter',
        'Premium finish options',
        'Wheels for mobility'
      ],
      specifications: {
        'Material Options': 'Granite, Concrete',
        'Weight': '25-40 kg options',
        'Pole Compatibility': '38-48mm',
        'Base Dimensions': '50 x 50 cm'
      }
    }
  ]
};

// Category 3: Life Saving & Pool Safety
const lifeSavingPoolSafety: Category = {
  id: 'life-saving-pool-safety',
  name: 'Life Saving & Pool Safety',
  slug: 'life-saving-pool-safety',
  heroImage: '/images/outdoor/life-saving-pool-safety/hero.jpg',
  description: 'Essential pool safety and life saving equipment for compliance and protection. Trusted by hotels, water parks, and residential communities across the Middle East.',
  type: 'product',
  products: [
    {
      id: 'life-jacket',
      name: 'Life Jacket',
      slug: 'life-jacket',
      image: '/images/outdoor/life-saving-pool-safety/life-jacket.jpg',
      description: 'Professional-grade life jacket for water safety. Essential equipment for pools, beaches, and marine activities.',
      features: [
        'High buoyancy foam',
        'Adjustable straps',
        'Reflective strips',
        'Whistle included',
        'Multiple sizes available'
      ],
      specifications: {
        'Buoyancy': '100N',
        'Material': 'Nylon outer, EPE foam',
        'Sizes': 'Child, Adult M, Adult L, Adult XL',
        'Certification': 'CE Approved'
      }
    },
    {
      id: 'life-buoy-ring',
      name: 'Life Buoy Ring',
      slug: 'life-buoy-ring',
      image: '/images/outdoor/life-saving-pool-safety/life-buoy-ring.jpg',
      description: 'Standard life buoy ring for emergency rescue situations. Mandatory safety equipment for all pool facilities.',
      features: [
        'High-visibility orange color',
        'Reflective tape strips',
        'Grab rope included',
        'UV-resistant material',
        'Lightweight yet durable'
      ],
      specifications: {
        'Outer Diameter': '75 cm',
        'Inner Diameter': '44 cm',
        'Material': 'High-density polyethylene',
        'Buoyancy': '14.5 kg',
        'Rope Length': '30m'
      }
    },
    {
      id: 'rescue-tube',
      name: 'Rescue Tube',
      slug: 'rescue-tube',
      image: '/images/outdoor/life-saving-pool-safety/rescue-tube.jpg',
      description: 'Professional rescue tube used by lifeguards for water rescues. Flexible design allows wrapping around victims.',
      features: [
        'Flexible vinyl construction',
        'Shoulder strap included',
        'High-visibility color',
        'Durable clip closure',
        'Floats multiple persons'
      ],
      specifications: {
        'Length': '100 cm',
        'Material': 'Vinyl-coated foam',
        'Buoyancy': '100+ kg support',
        'Strap Length': 'Adjustable'
      }
    },
    {
      id: 'rescue-hook',
      name: 'Rescue Hook / Life Hook',
      slug: 'rescue-hook',
      image: '/images/outdoor/life-saving-pool-safety/rescue-hook.jpg',
      description: 'Extended reach rescue hook for pulling swimmers to safety from poolside. Essential lifeguard equipment.',
      features: [
        'Telescopic pole option',
        'Smooth rounded hook',
        'Lightweight aluminum',
        'Non-slip grip',
        'Wall mounting bracket'
      ],
      specifications: {
        'Length': '3.6m (standard)',
        'Material': 'Anodized aluminum',
        'Hook Material': 'ABS plastic',
        'Weight': '1.5 kg'
      }
    },
    {
      id: 'spine-board',
      name: 'Spine Board with Head Immobilizer',
      slug: 'spine-board',
      image: '/images/outdoor/life-saving-pool-safety/spine-board.jpg',
      description: 'Emergency spine board for safe victim transport. Critical equipment for serious pool incidents.',
      features: [
        'Full-length immobilization',
        'Head immobilizer included',
        'Multiple hand holds',
        'X-ray translucent',
        'Easy to clean'
      ],
      specifications: {
        'Length': '184 cm',
        'Width': '41 cm',
        'Material': 'High-density polyethylene',
        'Weight Capacity': '180 kg',
        'Weight': '7 kg'
      }
    },
    {
      id: 'lifeguard-chair-wooden',
      name: 'Lifeguard Chair - Wooden',
      slug: 'lifeguard-chair-wooden',
      image: '/images/outdoor/life-saving-pool-safety/lifeguard-chair-wooden.jpg',
      description: 'Classic wooden lifeguard chair providing elevated observation point. Available in 2, 3, and 4 step heights.',
      features: [
        'Solid wood construction',
        'Weather-treated finish',
        'Comfortable seat design',
        'Footrest included',
        'Umbrella holder option'
      ],
      specifications: {
        'Heights Available': '2-step, 3-step, 4-step',
        'Material': 'Treated hardwood',
        'Seat Height': '1.2m - 2.4m options',
        'Base Width': '1.2m'
      }
    },
    {
      id: 'lifeguard-chair-stainless',
      name: 'Lifeguard Chair - Stainless Steel',
      slug: 'lifeguard-chair-stainless',
      image: '/images/outdoor/life-saving-pool-safety/lifeguard-chair-stainless.jpg',
      description: 'Premium stainless steel lifeguard chair for maximum durability. Ideal for commercial and public pools.',
      features: [
        'Marine-grade stainless steel',
        'Corrosion resistant',
        'Modern aesthetic',
        'Integrated umbrella mount',
        'Non-slip steps'
      ],
      specifications: {
        'Material': '316 Stainless Steel',
        'Seat Height': '1.8m standard',
        'Weight Capacity': '150 kg',
        'Finish': 'Polished or brushed'
      }
    },
    {
      id: 'first-aid-box',
      name: 'First Aid Box',
      slug: 'first-aid-box',
      image: '/images/outdoor/life-saving-pool-safety/first-aid-box.jpg',
      description: 'Comprehensive first aid kit for poolside emergencies. Fully stocked with essential medical supplies.',
      features: [
        'Wall-mountable design',
        'Clearly marked contents',
        'Waterproof case',
        'Complete supplies included',
        'Refill packs available'
      ],
      specifications: {
        'Case Material': 'ABS Plastic',
        'Dimensions': '30 x 20 x 10 cm',
        'Contents': '50+ items',
        'Suitable For': 'Up to 50 persons'
      }
    }
  ]
};

// Category 4: Camp & Staff Supplies
const campStaffSupplies: Category = {
  id: 'camp-staff-supplies',
  name: 'Camp & Staff Supplies',
  slug: 'camp-staff-supplies',
  heroImage: '/images/outdoor/camp-staff-supplies/hero.jpg',
  description: 'Complete solutions for worker camps and staff facilities. Beds, lockers, kitchen equipment, safety gear, and everything needed to outfit your accommodation sites.',
  type: 'product',
  products: [
    {
      id: 'bunk-bed-metal',
      name: 'Bunk Bed - Metal Frame',
      slug: 'bunk-bed-metal',
      image: '/images/outdoor/camp-staff-supplies/bunk-bed-metal.jpg',
      description: 'Heavy-duty metal bunk bed for worker accommodations. Space-efficient design maximizes room capacity.',
      features: [
        'Heavy-duty steel construction',
        'Powder-coated finish',
        'Safety rails included',
        'Multiple configurations',
        'Easy assembly'
      ],
      specifications: {
        'Dimensions': '90 x 190 x 170 cm',
        'Material': 'Steel tube frame',
        'Weight Capacity': '120 kg per bed',
        'Mattress Size': 'Standard single'
      }
    },
    {
      id: 'single-bed-metal',
      name: 'Single Bed - Metal Frame',
      slug: 'single-bed-metal',
      image: '/images/outdoor/camp-staff-supplies/single-bed-metal.jpg',
      description: 'Sturdy single bed with metal frame. Durable option for staff quarters and dormitories.',
      features: [
        'Reinforced steel frame',
        'Mesh base for ventilation',
        'Headboard and footboard',
        'Floor protectors',
        'Stackable design'
      ],
      specifications: {
        'Dimensions': '90 x 190 x 70 cm',
        'Frame Material': 'Powder-coated steel',
        'Weight Capacity': '150 kg',
        'Assembly': 'Tool-free'
      }
    },
    {
      id: 'steel-locker',
      name: 'Steel Locker',
      slug: 'steel-locker',
      image: '/images/outdoor/camp-staff-supplies/steel-locker.jpg',
      description: 'Secure steel locker for personal belongings. Available in single and multi-door configurations.',
      features: [
        'Heavy-gauge steel',
        'Ventilation slots',
        'Cam lock or padlock option',
        'Adjustable shelves',
        'Multiple door options'
      ],
      specifications: {
        'Dimensions': '183 x 45 x 40 cm',
        'Material': 'Cold-rolled steel',
        'Configurations': '1, 2, 4, 6 door options',
        'Finish': 'Powder-coated'
      }
    },
    {
      id: 'steel-wardrobe',
      name: 'Steel Wardrobe',
      slug: 'steel-wardrobe',
      image: '/images/outdoor/camp-staff-supplies/steel-wardrobe.jpg',
      description: 'Full-size steel wardrobe for staff accommodation. Secure storage with hanging and shelf space.',
      features: [
        'Full-height hanging space',
        'Internal shelves',
        'Locking mechanism',
        'Mirror option available',
        'Durable construction'
      ],
      specifications: {
        'Dimensions': '183 x 90 x 40 cm',
        'Material': 'Steel',
        'Doors': 'Single or double',
        'Interior': 'Shelf and hanging rail'
      }
    },
    {
      id: 'mattress-foam',
      name: 'Foam Mattress',
      slug: 'mattress-foam',
      image: '/images/outdoor/camp-staff-supplies/mattress-foam.jpg',
      description: 'Quality foam mattress for comfortable rest. Suitable for bunk beds and single beds.',
      features: [
        'High-density foam',
        'Fabric cover included',
        'Fire retardant',
        'Multiple thickness options',
        'Easy to clean'
      ],
      specifications: {
        'Sizes': '90 x 190 cm',
        'Thickness': '8, 10, 12 cm options',
        'Density': '32 kg/m³',
        'Cover': 'Removable, washable'
      }
    },
    {
      id: 'bedding-set',
      name: 'Bedding Set',
      slug: 'bedding-set',
      image: '/images/outdoor/camp-staff-supplies/bedding-set.jpg',
      description: 'Complete bedding set including sheet, pillow, and blanket. Bulk options for accommodations.',
      features: [
        'Complete set',
        'Durable fabric',
        'Easy wash and dry',
        'Multiple colors',
        'Bulk pricing available'
      ],
      specifications: {
        'Includes': 'Fitted sheet, pillow, pillow cover, blanket',
        'Material': 'Poly-cotton blend',
        'Size': 'Single bed',
        'Colors': 'White, Blue, Grey'
      }
    },
    {
      id: 'safety-shoes',
      name: 'Safety Shoes',
      slug: 'safety-shoes',
      image: '/images/outdoor/camp-staff-supplies/safety-shoes.jpg',
      description: 'Steel toe safety shoes for maintenance and security staff. Multiple styles for different work environments.',
      features: [
        'Steel toe cap',
        'Anti-slip sole',
        'Oil resistant',
        'Comfortable insole',
        'Durable construction'
      ],
      specifications: {
        'Toe Protection': 'Steel cap 200J',
        'Sole': 'PU/Rubber',
        'Sizes': 'EU 38-46',
        'Standards': 'EN ISO 20345'
      }
    },
    {
      id: 'coverall',
      name: 'Coverall - Work Uniform',
      slug: 'coverall',
      image: '/images/outdoor/camp-staff-supplies/coverall.jpg',
      description: 'Professional work coverall for maintenance teams. Available in standard and hi-vis reflective options.',
      features: [
        'Full-body coverage',
        'Multiple pockets',
        'Reflective strips option',
        'Breathable fabric',
        'Durable stitching'
      ],
      specifications: {
        'Material': '65% Polyester, 35% Cotton',
        'Sizes': 'S, M, L, XL, XXL, 3XL',
        'Types': 'Standard, Reflective',
        'Colors': 'Navy, Grey, Orange'
      }
    },
    {
      id: 'safety-vest',
      name: 'Safety Vest - Hi-Vis',
      slug: 'safety-vest',
      image: '/images/outdoor/camp-staff-supplies/safety-vest.jpg',
      description: 'High-visibility safety vest for security and outdoor workers. Essential for site safety compliance.',
      features: [
        'Bright fluorescent fabric',
        'Reflective tape strips',
        'Adjustable fit',
        'Breathable mesh',
        'Multiple colors'
      ],
      specifications: {
        'Material': 'Polyester mesh',
        'Reflective Tape': '5 cm width',
        'Sizes': 'Universal / XL',
        'Colors': 'Yellow, Orange, Green'
      }
    },
    {
      id: 'safety-helmet',
      name: 'Safety Helmet',
      slug: 'safety-helmet',
      image: '/images/outdoor/camp-staff-supplies/safety-helmet.jpg',
      description: 'Industrial safety helmet for head protection. Suitable for construction and maintenance work.',
      features: [
        'Impact resistant shell',
        'Adjustable headband',
        'Ventilation slots',
        'Sweat band included',
        'Chin strap option'
      ],
      specifications: {
        'Material': 'HDPE / ABS',
        'Standards': 'EN 397',
        'Colors': 'White, Yellow, Blue, Red',
        'Adjustment': 'Ratchet system'
      }
    },
    {
      id: 'work-gloves',
      name: 'Work Gloves',
      slug: 'work-gloves',
      image: '/images/outdoor/camp-staff-supplies/work-gloves.jpg',
      description: 'Protective work gloves for various applications. Multiple types for different tasks.',
      features: [
        'Multiple material options',
        'Good grip',
        'Durable construction',
        'Comfortable fit',
        'Various protection levels'
      ],
      specifications: {
        'Types': 'Leather, Nitrile coated, Cotton',
        'Sizes': 'S, M, L, XL',
        'Applications': 'General, Heavy-duty, Chemical resistant',
        'Pack': 'Pairs or dozen'
      }
    },
    {
      id: 'waste-bin',
      name: 'Waste Bin',
      slug: 'waste-bin',
      image: '/images/outdoor/camp-staff-supplies/waste-bin.jpg',
      description: 'Heavy-duty waste bins for camps and facilities. Available in multiple sizes and colors for waste segregation.',
      features: [
        'Durable HDPE construction',
        'Wheeled for easy movement',
        'Lid included',
        'Multiple colors for segregation',
        'UV resistant'
      ],
      specifications: {
        'Capacity': '120L, 240L options',
        'Material': 'High-density polyethylene',
        'Colors': 'Green, Blue, Red, Yellow',
        'Features': 'Wheels, hinged lid'
      }
    },
    {
      id: 'gas-stove',
      name: 'Gas Stove',
      slug: 'gas-stove',
      image: '/images/outdoor/camp-staff-supplies/gas-stove.jpg',
      description: 'Commercial gas stoves for camp kitchens. Available in tabletop and heavy-duty floor models.',
      features: [
        'Multiple burner options',
        'Durable construction',
        'Easy ignition',
        'Adjustable flame control',
        'Stable base design'
      ],
      specifications: {
        'Types': '2-burner tabletop, Heavy-duty floor model',
        'Material': 'Stainless steel / Cast iron',
        'Gas Type': 'LPG compatible',
        'Burner Output': 'High BTU'
      }
    },
    {
      id: 'water-cooler',
      name: 'Water Cooler / Dispenser',
      slug: 'water-cooler',
      image: '/images/outdoor/camp-staff-supplies/water-cooler.jpg',
      description: 'Industrial water coolers for staff facilities. Stainless steel construction for durability and hygiene.',
      features: [
        'Stainless steel body',
        'Multiple tap options',
        'High cooling capacity',
        'Easy to clean',
        'Heavy-duty compressor'
      ],
      specifications: {
        'Capacity': '40L, 80L, 120L options',
        'Material': 'Stainless steel',
        'Cooling': '3-tap, 4-tap options',
        'Power': '220V'
      }
    },
    {
      id: 'water-container',
      name: 'Water Container / Jug',
      slug: 'water-container',
      image: '/images/outdoor/camp-staff-supplies/water-container.jpg',
      description: 'Portable water containers and jugs for camps and outdoor sites. Insulated options available.',
      features: [
        'Food-grade material',
        'Insulated options',
        'Easy-pour spout',
        'Carrying handle',
        'Durable construction'
      ],
      specifications: {
        'Capacity': '10L, 20L options',
        'Material': 'HDPE / Insulated plastic',
        'Type': 'Standard, Insulated cooler',
        'Color': 'Orange, Blue'
      }
    },
    {
      id: 'storage-shelving',
      name: 'Storage Shelving',
      slug: 'storage-shelving',
      image: '/images/outdoor/camp-staff-supplies/storage-shelving.jpg',
      description: 'Heavy-duty metal shelving for storage rooms and warehouses. Adjustable shelf heights.',
      features: [
        'Adjustable shelves',
        'High weight capacity',
        'Easy assembly',
        'Powder-coated finish',
        'Modular design'
      ],
      specifications: {
        'Material': 'Steel',
        'Dimensions': '180 x 90 x 45 cm',
        'Shelves': '4-5 adjustable',
        'Load Capacity': '150kg per shelf'
      }
    },
    {
      id: 'water-boiler',
      name: 'Water Boiler / Urn',
      slug: 'water-boiler',
      image: '/images/outdoor/camp-staff-supplies/water-boiler.jpg',
      description: 'Commercial water boilers for tea and coffee service. Stainless steel construction.',
      features: [
        'Fast heating element',
        'Stainless steel body',
        'Keep-warm function',
        'Water level indicator',
        'Safety thermostat'
      ],
      specifications: {
        'Capacity': '10L, 20L, 30L options',
        'Material': 'Stainless steel',
        'Power': '220V, 2000-3000W',
        'Features': 'Auto shut-off'
      }
    },
    {
      id: 'blanket',
      name: 'Blanket',
      slug: 'blanket',
      image: '/images/outdoor/camp-staff-supplies/blanket.jpg',
      description: 'Warm blankets for staff accommodation. Available in various materials and sizes.',
      features: [
        'Soft and warm',
        'Durable fabric',
        'Easy to wash',
        'Multiple sizes',
        'Bulk options available'
      ],
      specifications: {
        'Size': '170 x 230 cm',
        'Material': 'Polyester / Fleece',
        'Weight': 'Light, Medium, Heavy options',
        'Colors': 'Various'
      }
    },
    {
      id: 'pillow',
      name: 'Pillow',
      slug: 'pillow',
      image: '/images/outdoor/camp-staff-supplies/pillow.jpg',
      description: 'Quality pillows for comfortable sleep. Bulk quantities available for accommodations.',
      features: [
        'Comfortable fill',
        'Cotton cover',
        'Standard size',
        'Hypoallergenic options',
        'Bulk pricing'
      ],
      specifications: {
        'Size': '70 x 140 cm',
        'Fill': 'Polyester fiber',
        'Cover': 'Cotton blend',
        'Pack': 'Individual or bulk'
      }
    },
    {
      id: 'comforter',
      name: 'Comforter',
      slug: 'comforter',
      image: '/images/outdoor/camp-staff-supplies/comforter.jpg',
      description: 'Packaged comforter sets for staff bedding. Ready-to-use bedding solution.',
      features: [
        'Complete set',
        'Packaged for easy storage',
        'Durable material',
        'Easy care',
        'Standard sizing'
      ],
      specifications: {
        'Size': '160 x 220 cm',
        'Material': 'Polyester fill',
        'Cover': 'Poly-cotton',
        'Packaging': 'Compressed pack'
      }
    },
    {
      id: 'metal-cabinet',
      name: 'Metal Cabinet',
      slug: 'metal-cabinet',
      image: '/images/outdoor/camp-staff-supplies/metal-cabinet.jpg',
      description: 'Secure metal storage cabinet for documents and valuables. Ideal for offices and accommodation sites.',
      features: [
        'Heavy-duty steel',
        'Locking doors',
        'Adjustable shelves',
        'Powder-coated finish',
        'Multiple sizes'
      ],
      specifications: {
        'Dimensions': '90 x 60 x 40 cm',
        'Material': 'Cold-rolled steel',
        'Shelves': 'Adjustable',
        'Lock': 'Key lock included'
      }
    },
    {
      id: 'bedside-cabinet',
      name: 'Bedside Cabinet',
      slug: 'bedside-cabinet',
      image: '/images/outdoor/camp-staff-supplies/bedside-cabinet.jpg',
      description: 'Compact bedside cabinet with drawer for personal storage in dormitories.',
      features: [
        'Compact design',
        'Drawer storage',
        'Durable steel',
        'Powder-coated',
        'Stackable'
      ],
      specifications: {
        'Dimensions': '50 x 45 x 45 cm',
        'Material': 'Steel',
        'Drawers': '1-2 options',
        'Finish': 'Powder-coated'
      }
    },
    {
      id: 'recycling-bins',
      name: 'Recycling Bins Set',
      slug: 'recycling-bins',
      image: '/images/outdoor/camp-staff-supplies/recycling-bins.jpg',
      description: 'Color-coded recycling bins for waste segregation. Essential for camp waste management.',
      features: [
        'Color-coded set',
        'Wheeled for mobility',
        'Durable HDPE',
        'Standard colors',
        'Easy to clean'
      ],
      specifications: {
        'Capacity': '120L each',
        'Colors': 'Blue, Green, Yellow, Red',
        'Material': 'HDPE plastic',
        'Set': '3 or 4 bins'
      }
    },
    {
      id: 'executive-shoes',
      name: 'Executive Safety Shoes',
      slug: 'executive-shoes',
      image: '/images/outdoor/camp-staff-supplies/executive-shoes.jpg',
      description: 'Professional-looking safety shoes for supervisors and office staff. Steel toe with formal appearance.',
      features: [
        'Formal appearance',
        'Steel toe protection',
        'Comfortable for all-day wear',
        'Slip-resistant sole',
        'Leather upper'
      ],
      specifications: {
        'Material': 'Leather upper',
        'Toe Protection': 'Steel cap',
        'Sizes': 'EU 38-46',
        'Standards': 'EN ISO 20345'
      }
    },
    {
      id: 'gum-boot',
      name: 'Gum Boot',
      slug: 'gum-boot',
      image: '/images/outdoor/camp-staff-supplies/gum-boot.jpg',
      description: 'Waterproof rubber boots for wet conditions. Essential for cleaning and outdoor work.',
      features: [
        'Fully waterproof',
        'Steel toe option',
        'Anti-slip sole',
        'Easy to clean',
        'Comfortable fit'
      ],
      specifications: {
        'Material': 'PVC / Rubber',
        'Height': 'Knee-high',
        'Sizes': 'EU 38-46',
        'Colors': 'Yellow, Black, Green'
      }
    },
    {
      id: 'pant-shirt-cotton',
      name: 'Pant & Shirt - Cotton',
      slug: 'pant-shirt-cotton',
      image: '/images/outdoor/camp-staff-supplies/pant-shirt-cotton.jpg',
      description: 'Cotton work uniform set with pant and shirt. Comfortable for daily wear.',
      features: [
        '100% cotton',
        'Breathable fabric',
        'Multiple pockets',
        'Durable stitching',
        'Easy care'
      ],
      specifications: {
        'Material': '100% Cotton',
        'Sizes': 'S to 3XL',
        'Colors': 'Khaki, Navy, Grey',
        'Set': 'Pant + Shirt'
      }
    },
    {
      id: 'freezer-jacket',
      name: 'Freezer Jacket & Trouser',
      slug: 'freezer-jacket',
      image: '/images/outdoor/camp-staff-supplies/freezer-jacket.jpg',
      description: 'Insulated cold storage workwear for freezer and cold room operations.',
      features: [
        'Heavy insulation',
        'Waterproof outer',
        'Reflective strips',
        'Hood included',
        'Multiple pockets'
      ],
      specifications: {
        'Temperature Rating': '-40°C',
        'Material': 'Nylon outer, Polyester fill',
        'Sizes': 'S to 3XL',
        'Set': 'Jacket + Trouser'
      }
    },
    {
      id: 'disposable-coverall',
      name: 'Disposable Coverall',
      slug: 'disposable-coverall',
      image: '/images/outdoor/camp-staff-supplies/disposable-coverall.jpg',
      description: 'Single-use protective coveralls for painting, cleaning, and hazardous work.',
      features: [
        'Lightweight material',
        'Full body coverage',
        'Elastic cuffs',
        'Hood attached',
        'Economical'
      ],
      specifications: {
        'Material': 'Non-woven polypropylene',
        'Sizes': 'M to 3XL',
        'Color': 'White',
        'Pack': '50 pcs/carton'
      }
    },
    {
      id: 'executive-vest',
      name: 'Executive Vest',
      slug: 'executive-vest',
      image: '/images/outdoor/camp-staff-supplies/executive-vest.jpg',
      description: 'Professional hi-vis vest with multiple pockets for supervisors and site managers.',
      features: [
        'Hi-vis fabric',
        'Multiple pockets',
        'ID holder',
        'Reflective strips',
        'Zip front'
      ],
      specifications: {
        'Material': 'Polyester',
        'Visibility': 'Class 2',
        'Sizes': 'M to 3XL',
        'Colors': 'Yellow, Orange, Blue'
      }
    },
    {
      id: 'safety-goggles',
      name: 'Safety Goggles',
      slug: 'safety-goggles',
      image: '/images/outdoor/camp-staff-supplies/safety-goggles.jpg',
      description: 'Protective eyewear for dust, debris, and chemical splash protection.',
      features: [
        'Clear lens',
        'Anti-fog coating',
        'Adjustable strap',
        'Indirect ventilation',
        'Over-glasses fit'
      ],
      specifications: {
        'Lens': 'Polycarbonate',
        'Standards': 'EN 166',
        'Type': 'Direct/Indirect vent',
        'Pack': 'Individual or bulk'
      }
    },
    {
      id: 'welding-gloves',
      name: 'Welding Gloves',
      slug: 'welding-gloves',
      image: '/images/outdoor/camp-staff-supplies/welding-gloves.jpg',
      description: 'Heat-resistant leather gloves for welding and hot work applications.',
      features: [
        'Heat resistant',
        'Full leather construction',
        'Extended cuff',
        'Reinforced palm',
        'Comfortable lining'
      ],
      specifications: {
        'Material': 'Split leather',
        'Length': '35 cm',
        'Heat Resistance': 'Up to 250°C',
        'Size': 'Universal'
      }
    },
    {
      id: 'safety-harness',
      name: 'Safety Harness',
      slug: 'safety-harness',
      image: '/images/outdoor/camp-staff-supplies/safety-harness.jpg',
      description: 'Full body safety harness for fall protection during work at height.',
      features: [
        'Full body support',
        'Adjustable straps',
        'Dorsal D-ring',
        'Quick-connect buckles',
        'Padded shoulders'
      ],
      specifications: {
        'Type': 'Full body',
        'D-Rings': 'Dorsal + Front',
        'Standards': 'EN 361',
        'Weight Capacity': '140 kg'
      }
    },
    {
      id: 'ear-protection',
      name: 'Ear Plug & Muff',
      slug: 'ear-protection',
      image: '/images/outdoor/camp-staff-supplies/ear-protection.jpg',
      description: 'Hearing protection equipment including disposable plugs and over-ear muffs.',
      features: [
        'High noise reduction',
        'Comfortable fit',
        'Reusable options',
        'Adjustable headband',
        'Compact storage'
      ],
      specifications: {
        'NRR': '25-32 dB',
        'Types': 'Plugs, Muffs',
        'Material': 'Foam, PVC',
        'Standards': 'EN 352'
      }
    },
    {
      id: 'mask-respirator',
      name: 'Mask & Respirator',
      slug: 'mask-respirator',
      image: '/images/outdoor/camp-staff-supplies/mask-respirator.jpg',
      description: 'Respiratory protection from dust, fumes, and chemical vapors.',
      features: [
        'Multiple filter options',
        'Adjustable straps',
        'Comfortable seal',
        'Replaceable cartridges',
        'Clear field of vision'
      ],
      specifications: {
        'Types': 'Dust mask, Half-face, Full-face',
        'Filter Class': 'P1, P2, P3',
        'Standards': 'EN 140, EN 149',
        'Material': 'Silicone / TPE'
      }
    },
    {
      id: 'eye-wash-station',
      name: 'Eye Wash Station',
      slug: 'eye-wash-station',
      image: '/images/outdoor/camp-staff-supplies/eye-wash-station.jpg',
      description: 'Emergency eye wash station for chemical splash and debris incidents.',
      features: [
        'Stainless steel construction',
        'Dual spray heads',
        'Stay-open valves',
        'Wall or pedestal mount',
        'Easy activation'
      ],
      specifications: {
        'Material': 'Stainless steel',
        'Flow Rate': '1.5 GPM',
        'Standards': 'ANSI Z358.1',
        'Mount': 'Wall / Pedestal'
      }
    },
    {
      id: 'fire-blanket',
      name: 'Fire Blanket',
      slug: 'fire-blanket',
      image: '/images/outdoor/camp-staff-supplies/fire-blanket.jpg',
      description: 'Fire suppression blanket for kitchen and workshop fire emergencies.',
      features: [
        'Fiberglass material',
        'Quick-release case',
        'Wall mountable',
        'Reusable',
        'Multiple sizes'
      ],
      specifications: {
        'Sizes': '1x1m, 1.2x1.2m, 1.8x1.2m',
        'Material': 'Fiberglass',
        'Temperature': 'Up to 550°C',
        'Standards': 'EN 1869'
      }
    },
    {
      id: 'stretcher',
      name: 'Folding Stretcher',
      slug: 'stretcher',
      image: '/images/outdoor/camp-staff-supplies/stretcher.jpg',
      description: 'Emergency folding stretcher for patient transport. Compact and portable.',
      features: [
        'Foldable design',
        'Lightweight aluminum',
        'Safety straps',
        'Easy to carry',
        'Durable canvas'
      ],
      specifications: {
        'Material': 'Aluminum frame, Canvas bed',
        'Weight Capacity': '160 kg',
        'Folded Size': 'Compact',
        'Weight': '8 kg'
      }
    },
    {
      id: 'warning-tape',
      name: 'Warning Tape',
      slug: 'warning-tape',
      image: '/images/outdoor/camp-staff-supplies/warning-tape.jpg',
      description: 'Hazard warning tape for marking dangerous areas and construction zones.',
      features: [
        'High visibility',
        'Durable PE material',
        'Non-adhesive',
        'Weather resistant',
        'Various patterns'
      ],
      specifications: {
        'Width': '70mm',
        'Length': '500m roll',
        'Material': 'Polyethylene',
        'Colors': 'Red/White, Yellow/Black'
      }
    },
    {
      id: 'traffic-baton',
      name: 'Traffic Baton & Solar Light',
      slug: 'traffic-baton',
      image: '/images/outdoor/camp-staff-supplies/traffic-baton.jpg',
      description: 'LED traffic baton for traffic control and emergency signaling.',
      features: [
        'LED illumination',
        'Multiple flash modes',
        'Long battery life',
        'Magnetic base',
        'Weatherproof'
      ],
      specifications: {
        'Length': '54 cm',
        'Light': 'Red/Green LED',
        'Battery': 'AA or rechargeable',
        'Modes': 'Steady, Flash, Strobe'
      }
    },
    {
      id: 'traffic-cone',
      name: 'Road Cone & Pole',
      slug: 'traffic-cone',
      image: '/images/outdoor/camp-staff-supplies/traffic-cone.jpg',
      description: 'Traffic cones and delineator posts for road safety and site marking.',
      features: [
        'High visibility orange',
        'Reflective collar',
        'UV resistant',
        'Flexible PVC',
        'Stackable'
      ],
      specifications: {
        'Heights': '45cm, 75cm, 100cm',
        'Material': 'PVC',
        'Reflective': '2 bands',
        'Base': 'Weighted option'
      }
    },
    {
      id: 'road-barrier',
      name: 'Road Barrier',
      slug: 'road-barrier',
      image: '/images/outdoor/camp-staff-supplies/road-barrier.jpg',
      description: 'Heavy-duty plastic road barriers for traffic control and site separation.',
      features: [
        'Water/sand fillable',
        'Interlocking design',
        'High visibility',
        'UV resistant',
        'Easy to transport'
      ],
      specifications: {
        'Length': '2m',
        'Height': '1m',
        'Material': 'HDPE',
        'Fill': 'Water or sand'
      }
    },
    {
      id: 'expandable-barrier',
      name: 'Expandable Barrier',
      slug: 'expandable-barrier',
      image: '/images/outdoor/camp-staff-supplies/expandable-barrier.jpg',
      description: 'Portable expanding barrier for crowd control and restricted area marking.',
      features: [
        'Expandable design',
        'Portable and lightweight',
        'No tools required',
        'Yellow/Black pattern',
        'Durable construction'
      ],
      specifications: {
        'Expanded Length': '3.5m',
        'Height': '1m',
        'Material': 'Steel / Aluminum',
        'Wheels': 'Optional'
      }
    },
    {
      id: 'convex-mirror',
      name: 'Convex Mirror',
      slug: 'convex-mirror',
      image: '/images/outdoor/camp-staff-supplies/convex-mirror.jpg',
      description: 'Safety convex mirrors for blind spots, parking areas, and intersections.',
      features: [
        'Wide angle view',
        'Shatterproof',
        'Weather resistant',
        'Easy mounting',
        'Multiple sizes'
      ],
      specifications: {
        'Diameter': '45cm, 60cm, 80cm, 100cm',
        'Material': 'Acrylic / Polycarbonate',
        'View Angle': '130°',
        'Mount': 'Wall / Pole bracket'
      }
    },
    {
      id: 'megaphone',
      name: 'Megaphone & Siren',
      slug: 'megaphone',
      image: '/images/outdoor/camp-staff-supplies/megaphone.jpg',
      description: 'Portable megaphone with siren for announcements and emergency alerts.',
      features: [
        'Powerful amplification',
        'Built-in siren',
        'Recording function',
        'Shoulder strap',
        'Battery operated'
      ],
      specifications: {
        'Power': '25W, 50W options',
        'Range': 'Up to 1km',
        'Battery': '8x D cells',
        'Features': 'Talk, Siren, Record'
      }
    },
    {
      id: 'spill-kit',
      name: 'Spill Kit',
      slug: 'spill-kit',
      image: '/images/outdoor/camp-staff-supplies/spill-kit.jpg',
      description: 'Emergency spill containment kit for oil, chemical, and hazmat spills.',
      features: [
        'Complete kit',
        'Absorbent materials',
        'PPE included',
        'Portable bag/bin',
        'Multiple sizes'
      ],
      specifications: {
        'Types': 'Oil-only, Chemical, Universal',
        'Capacity': '20L, 50L, 120L',
        'Contents': 'Pads, socks, PPE, bags',
        'Container': 'Bag or wheelie bin'
      }
    }
  ]
};

// Export all categories
export const outdoorCategories: Category[] = [
  sunLoungersPoolside,
  outdoorFurniture,
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
