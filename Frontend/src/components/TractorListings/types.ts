export interface Tractor {
    id: string;
    title: string;
    description: string;
    age: number;
    hoursUsed: number;
    price: number;
    location: string;
    images: string[];
    type: string;
    specifications: Record<string, string>;
    sellerId: string;
  }
  
  export interface TractorFormData extends Omit<Tractor, 'id' | 'sellerId'> {};
