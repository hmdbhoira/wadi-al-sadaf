// Brand logos mapping
export interface Brand {
  name: string;
  logo: string;
}

export const brandLogos: Record<string, string> = {
  'SIEMENS': 'images/brands/siemens.png',
  'Schneider Electric': 'images/brands/schneider-electric.png',
  'ABB': 'images/brands/abb.png',
  'OMRON': 'images/brands/omron.png',
  'Phoenix Contact': 'images/brands/phoenix-contact.png',
  'FLUKE': 'images/brands/fluke.png',
  'Danfoss': 'images/brands/danfoss.png',
  'Lenze': 'images/brands/lenze.png',
  'LS': 'images/brands/ls.png',
  'LAPP KABEL': 'images/brands/lapp-kabel.png',
  'Rockwell Automation': 'images/brands/rockwell-automation.png',
  'SICK': 'images/brands/sick.png',
  'Weidmüller': 'images/brands/weidmuller.png',
  'Pilz': 'images/brands/pilz.png',
  'Honeywell': 'images/brands/honeywell.png',
  'ifm electronic': 'images/brands/ifm-electronic.png',
  'KUKA': 'images/brands/kuka.png',
  'Rotork': 'images/brands/rotork.png',
  'WIKA': 'images/brands/wika.png',
  'FESTO': 'images/brands/festo.png',
  'E+H Endress+Hauser': 'images/brands/endress-hauser.png',
  'Rosemount': 'images/brands/emerson.png', // Rosemount is part of Emerson
  'Emerson': 'images/brands/emerson.png',
  'Spirax Sarco': 'images/brands/spirax-sarco.png',
  'SMC': 'images/brands/smc.png',
  'KROHNE': 'images/brands/krohne.png',
};

export function getBrandLogo(brandName: string): string | undefined {
  return brandLogos[brandName];
}
