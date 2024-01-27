export interface IProduct {
    _id?: string,
    title: string,
    price: number,
    quantity: number,
    category: string,
    description?: string,
    details?: string[],
}