export interface PhoneCard {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  year: number;
  ram: string;
  image: string;
}

export type Phone = {
  id: number;
  namespaceId: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  priceRegular: number;
  priceDiscount: number;
  description: [[string, string]];
  screen: string;
  capacity: string;
  capacityAvailable: [string];
  color: string;
  colorsAvailable: [string];
  processor: string;
  camera: string;
  ram: string;
  zoom: string;
  year: string;
  cell: [string];
  images: [string];
  resolution: string;
  count?: number;
};
