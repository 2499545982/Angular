export class Price
{
    price: number;
    unit: string;

    constructor()
    {

    }
}
export class Product
{
    category: string;
    pricing: Price;
    features:string[];
    action:string;
    constructor()
    {

    }
}