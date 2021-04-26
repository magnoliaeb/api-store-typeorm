import { Category } from './category.interface';

export class Product {
    productId: string;
    name: string;
    slug: string;
    price: number;
    description: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    category: Category
}