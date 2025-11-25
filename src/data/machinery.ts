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
    brands: ['SIEMENS', 'Rotork', 'WIKA', 'ABB', 'FESTO', 'Honeywell', 'E+H Endress+Hauser', 'Rosemount', 'Emerson', 'Spirax Sarco', 'SMC', 'KROHNE'],
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
