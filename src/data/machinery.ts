// Machinery products data structure
// Based on Wadi Al Sadaf PDF Profile

export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  heroImage: string;
  description: string;
  products: Product[];
  brands?: string[];
}

export const machineryCategories: Category[] = [
  {
    id: 'electrical',
    name: 'Electrical',
    slug: 'electrical',
    heroImage: 'images/machinery/electrical/hero.png',
    description: 'Complete range of electrical products including VFDs, motors, transformers, circuit breakers, and control components for industrial applications.',
    brands: ['SIEMENS', 'Schneider Electric', 'ABB', 'OMRON', 'Phoenix Contact', 'FLUKE', 'Danfoss', 'Lenze', 'LS', 'LAPP KABEL', 'Rockwell Automation'],
    products: [
      {
        id: 'vfd',
        name: 'Variable Frequency Drive (VFD)',
        slug: 'vfd',
        image: 'images/machinery/electrical/vfd.png',
        description: 'High-performance variable frequency drives for precise motor control and energy efficiency.',
        category: 'electrical',
      },
      {
        id: 'motors',
        name: 'Motors',
        slug: 'motors',
        image: 'images/machinery/electrical/motors.png',
        description: 'Industrial electric motors for various applications with high efficiency and reliability.',
        category: 'electrical',
      },
      {
        id: 'circuit-breakers-contactors',
        name: 'Circuit Breakers & Contactors',
        slug: 'circuit-breakers-contactors',
        image: 'images/machinery/electrical/circuit-breakers-contactors.png',
        description: 'Reliable circuit protection and switching solutions for industrial electrical systems.',
        category: 'electrical',
      },
      {
        id: 'transformers',
        name: 'Transformers',
        slug: 'transformers',
        image: 'images/machinery/electrical/transformers.png',
        description: 'Industrial transformers for power distribution and voltage conversion.',
        category: 'electrical',
      },
      {
        id: 'timers-relays-switches',
        name: 'Timers, Relays, Pushbuttons & Switches',
        slug: 'timers-relays-switches',
        image: 'images/machinery/electrical/timers-relays-switches.png',
        description: 'Control components for automation and electrical control panels.',
        category: 'electrical',
      },
      {
        id: 'cables',
        name: 'Power, Signal & Instrumentation Cables',
        slug: 'cables',
        image: 'images/machinery/electrical/cables.png',
        description: 'High-quality cables for power distribution, signal transmission, and instrumentation.',
        category: 'electrical',
      },
      {
        id: 'panel-components',
        name: 'Panel Components & Accessories',
        slug: 'panel-components',
        image: 'images/machinery/electrical/panel-components.png',
        description: 'Complete range of components and accessories for electrical control panels.',
        category: 'electrical',
      },
      {
        id: 'electrical-tools',
        name: 'Electrical Tools',
        slug: 'electrical-tools',
        image: 'images/machinery/electrical/electrical-tools.png',
        description: 'Professional electrical tools for installation, maintenance, and testing.',
        category: 'electrical',
      },
    ],
  },
  {
    id: 'automation',
    name: 'Automation',
    slug: 'automation',
    heroImage: 'images/machinery/automation/automation-hero.png',
    description: 'Advanced automation solutions including PLCs, HMIs, industrial PCs, sensors, and robotic systems for smart manufacturing.',
    brands: ['SIEMENS', 'Schneider Electric', 'ABB', 'SICK', 'OMRON', 'Weidmüller', 'Pilz', 'Honeywell', 'Rockwell Automation', 'ifm electronic', 'KUKA'],
    products: [
      {
        id: 'plc',
        name: 'Programmable Logic Controller (PLC)',
        slug: 'plc',
        image: 'images/machinery/automation/plc.png',
        description: 'Industrial PLCs for reliable automation control and process management.',
        category: 'automation',
      },
      {
        id: 'hmi',
        name: 'Human Machine Interface (HMI)',
        slug: 'hmi',
        image: 'images/machinery/automation/hmi.png',
        description: 'User-friendly HMI panels for operator interface and process visualization.',
        category: 'automation',
      },
      {
        id: 'robot',
        name: 'Robot',
        slug: 'robot',
        image: 'images/machinery/automation/robot.png',
        description: 'Industrial robots for automated manufacturing and material handling.',
        category: 'automation',
      },
      {
        id: 'industrial-pc',
        name: 'Industrial PC',
        slug: 'industrial-pc',
        image: 'images/machinery/automation/industrial-pc.png',
        description: 'Rugged industrial computers for harsh manufacturing environments.',
        category: 'automation',
      },
      {
        id: 'smart-sensors',
        name: 'Smart Sensors',
        slug: 'smart-sensors',
        image: 'images/machinery/automation/smart-sensors.png',
        description: 'Intelligent sensors for precise detection and measurement in automation systems.',
        category: 'automation',
      },
      {
        id: 'barcode-scanners',
        name: 'Barcode Scanners',
        slug: 'barcode-scanners',
        image: 'images/machinery/automation/barcode-scanners.png',
        description: 'Industrial barcode scanners for tracking and identification systems.',
        category: 'automation',
      },
      {
        id: 'temperature-controllers',
        name: 'Temperature Controllers',
        slug: 'temperature-controllers',
        image: 'images/machinery/automation/temperature-controllers.png',
        description: 'Precision temperature controllers for process control applications.',
        category: 'automation',
      },
      {
        id: 'timers-counters-tachometers',
        name: 'Timers, Counters & Tachometers',
        slug: 'timers-counters-tachometers',
        image: 'images/machinery/automation/timers-counters-tachometers.png',
        description: 'Timing and counting devices for automation and process monitoring.',
        category: 'automation',
      },
    ],
  },
  {
    id: 'instrumentation',
    name: 'Instrumentation',
    slug: 'instrumentation',
    heroImage: 'images/machinery/instrumentation/hero.png', // TO BE ADDED
    description: 'Comprehensive instrumentation solutions for flow, level, pressure, and temperature measurement in industrial processes.',
    brands: ['SIEMENS', 'Rotork', 'WIKA', 'ABB', 'FESTO', 'Honeywell', 'E+H Endress+Hauser', 'Emerson', 'Spirax Sarco', 'SMC', 'KROHNE'],
    products: [
      {
        id: 'flow-instruments',
        name: 'Flow Instruments',
        slug: 'flow-instruments',
        image: 'images/machinery/instrumentation/flow-instruments.png', // TO BE ADDED
        description: 'Accurate flow measurement devices for liquid and gas applications.',
        category: 'instrumentation',
      },
      {
        id: 'level-instruments',
        name: 'Level Instruments',
        slug: 'level-instruments',
        image: 'images/machinery/instrumentation/level-instruments.png',
        description: 'Reliable level measurement solutions for tanks and vessels.',
        category: 'instrumentation',
      },
      {
        id: 'actuators',
        name: 'Actuators',
        slug: 'actuators',
        image: 'images/machinery/instrumentation/actuators.png', // TO BE ADDED
        description: 'Valve actuators for automated control of industrial processes.',
        category: 'instrumentation',
      },
      {
        id: 'solenoid-valves',
        name: 'Solenoid Valves',
        slug: 'solenoid-valves',
        image: 'images/machinery/instrumentation/solenoid-valves.png', // TO BE ADDED
        description: 'Electromechanical valves for precise fluid and gas control.',
        category: 'instrumentation',
      },
      {
        id: 'pressure-instruments',
        name: 'Pressure Instruments',
        slug: 'pressure-instruments',
        image: 'images/machinery/instrumentation/pressure-instruments.png', // TO BE ADDED
        description: 'Pressure transmitters and sensors for process monitoring.',
        category: 'instrumentation',
      },
      {
        id: 'gas-analytics-instruments',
        name: 'Gas Analytics Instruments',
        slug: 'gas-analytics-instruments',
        image: 'images/machinery/instrumentation/gas-analytics-instruments.png',
        description: 'Gas analysis equipment for emissions monitoring and process control.',
        category: 'instrumentation',
      },
      {
        id: 'temperature-instruments',
        name: 'Temperature Instruments',
        slug: 'temperature-instruments',
        image: 'images/machinery/instrumentation/temperature-instruments.png',
        description: 'Temperature sensors and transmitters for accurate thermal measurement.',
        category: 'instrumentation',
      },
      {
        id: 'pressure-gauges',
        name: 'Pressure Gauges',
        slug: 'pressure-gauges',
        image: 'images/machinery/instrumentation/pressure-gauges.png', // TO BE ADDED
        description: 'Mechanical and digital pressure gauges for visual monitoring.',
        category: 'instrumentation',
      },
    ],
  },
  {
    id: 'mechanical',
    name: 'Mechanical',
    slug: 'mechanical',
    heroImage: 'images/machinery/mechanical/hero.png',
    description: 'Complete range of mechanical products including valves, flanges, pumps, bearings, and industrial components for manufacturing and process industries.',
    brands: ['SKF', 'NSK', 'FAG', 'Grundfos', 'KSB', 'Flowserve', 'Pentair', 'Gates', 'Continental', 'Bosch', 'DeWalt'],
    products: [
      {
        id: 'valves',
        name: 'Valves',
        slug: 'valves',
        image: 'images/machinery/mechanical/valves.png',
        description: 'Industrial valves including gate, globe, ball, butterfly, and control valves for fluid and gas flow control.',
        category: 'mechanical',
      },
      {
        id: 'flanges',
        name: 'Flanges',
        slug: 'flanges',
        image: 'images/machinery/mechanical/flanges.png',
        description: 'High-quality stainless steel and carbon steel flanges for pipe connections and industrial applications.',
        category: 'mechanical',
      },
      {
        id: 'pumps',
        name: 'Pumps',
        slug: 'pumps',
        image: 'images/machinery/mechanical/pumps.png',
        description: 'Industrial pumps including centrifugal, submersible, and vertical multistage pumps for various applications.',
        category: 'mechanical',
      },
      {
        id: 'bearings',
        name: 'Bearings',
        slug: 'bearings',
        image: 'images/machinery/mechanical/bearings.png',
        description: 'Precision bearings including ball bearings, roller bearings, and thrust bearings from leading manufacturers.',
        category: 'mechanical',
      },
      {
        id: 'conveyor-belts',
        name: 'Conveyor Belts',
        slug: 'conveyor-belts',
        image: 'images/machinery/mechanical/conveyor-belts.png',
        description: 'Industrial conveyor belts and V-belts for power transmission and material handling systems.',
        category: 'mechanical',
      },
      {
        id: 'ss-pipes',
        name: 'SS Pipes & Fittings',
        slug: 'ss-pipes',
        image: 'images/machinery/mechanical/ss-pipes.png',
        description: 'Stainless steel pipes, tubes, and fittings for industrial piping systems and process applications.',
        category: 'mechanical',
      },
      {
        id: 'power-tools',
        name: 'Power Tools',
        slug: 'power-tools',
        image: 'images/machinery/mechanical/power-tools.png',
        description: 'Professional power tools including drills, grinders, saws, and sanders for industrial and construction use.',
        category: 'mechanical',
      },
      {
        id: 'gaskets',
        name: 'Gaskets & Seals',
        slug: 'gaskets',
        image: 'images/machinery/mechanical/gaskets.png',
        description: 'Industrial gaskets, seals, and O-rings for leak-proof connections in mechanical systems.',
        category: 'mechanical',
      },
    ],
  },
  {
    id: 'safety-security',
    name: 'Safety & Security',
    slug: 'safety-security',
    heroImage: 'images/machinery/safety-security/hero.png',
    description: 'Complete range of safety equipment and security systems including PPE, fire alarms, CCTV, and access control for workplace safety compliance.',
    brands: ['3M', 'Honeywell', 'MSA Safety', 'DuPont', 'Ansell', 'Uvex', 'Hikvision', 'Dahua', 'Bosch Security', 'Notifier'],
    products: [
      {
        id: 'safety-shoes',
        name: 'Safety Shoes & Boots',
        slug: 'safety-shoes',
        image: 'images/machinery/safety-security/safety-shoes.png',
        description: 'Industrial safety footwear including safety shoes and boots with steel toe caps, anti-slip soles, and electrical hazard protection.',
        category: 'safety-security',
      },
      {
        id: 'helmets',
        name: 'Safety Helmets, Goggles & Earplugs',
        slug: 'helmets',
        image: 'images/machinery/safety-security/helmets.png',
        description: 'Complete head and sensory protection including industrial hard hats, safety goggles for eye protection, and earplugs for hearing protection in noisy environments.',
        category: 'safety-security',
      },
      {
        id: 'gloves',
        name: 'Safety Gloves',
        slug: 'gloves',
        image: 'images/machinery/safety-security/gloves.png',
        description: 'Protective gloves for chemical handling, cut resistance, heat protection, and general industrial use.',
        category: 'safety-security',
      },
      {
        id: 'fire-alarm-system',
        name: 'Fire Alarm System',
        slug: 'fire-alarm-system',
        image: 'images/machinery/safety-security/fire-alarm-system.png',
        description: 'Complete fire detection and alarm systems including smoke detectors, control panels, and notification devices.',
        category: 'safety-security',
      },
      {
        id: 'cctv-system',
        name: 'CCTV System',
        slug: 'cctv-system',
        image: 'images/machinery/safety-security/cctv-system.png',
        description: 'Surveillance cameras, DVR/NVR systems, and monitoring solutions for industrial security.',
        category: 'safety-security',
      },
      {
        id: 'face-gas-masks',
        name: 'Face & Gas Masks',
        slug: 'face-gas-masks',
        image: 'images/machinery/safety-security/face-gas-masks.png',
        description: 'Respiratory protection including dust masks, gas masks, and full-face respirators for hazardous environments.',
        category: 'safety-security',
      },
      {
        id: 'jackets-harness',
        name: 'Safety Jackets & Harness',
        slug: 'jackets-harness',
        image: 'images/machinery/safety-security/jackets-harness.png',
        description: 'High-visibility jackets, safety vests, and fall protection harnesses for workplace safety.',
        category: 'safety-security',
      },
      {
        id: 'face-finger-recognition',
        name: 'Face & Finger Recognition System',
        slug: 'face-finger-recognition',
        image: 'images/machinery/safety-security/face-finger-recognition.png',
        description: 'Biometric access control systems with facial recognition and fingerprint authentication for secure entry.',
        category: 'safety-security',
      },
    ],
  },
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return machineryCategories.find((cat) => cat.slug === slug);
}

// Helper function to get product by slug within a category
export function getProductBySlug(categorySlug: string, productSlug: string): Product | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.products.find((product) => product.slug === productSlug);
}
