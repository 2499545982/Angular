export class Product {
    category: string;
    pricing: Price;
    features: string[];
    action: string;
}

export class Price {
    price: number;
    unit: string;
}