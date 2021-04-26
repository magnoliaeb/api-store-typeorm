import { EntitySchema } from 'typeorm'
import { BaseColumnSchemaPart } from './BaseColumnSchemaPart';
import { Product } from '../interface/product.interface';


export const ProductEntity = new EntitySchema<Product>({
    name: "Product",
    target: Product,
    tableName: "products",
    columns: {
        ...BaseColumnSchemaPart,
        productId: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },

        name: {
            type: "varchar"
        },
        slug: {
            type: "varchar",
        },
        price: {
            type: 'decimal',
            precision: 6,
            scale: 2
        },
        description: {
            type: 'text',
            nullable: true
        },
        status: {
            type: 'boolean',
            default: true,
        },
        // category: {
        //     type: 'string'
        // }
        


    },
    relations: {
        category: {
            target: 'Category',
            type: 'many-to-one',
            joinColumn: { name: 'categoryId' }
        }
        // category: {
        //     type: 'one-to-one',
        //     target: ICategory,
        //     inverseSide: 'categories.products',
        //     eager: true,
        //     joinColumn: true
        // }
    },


    uniques: [
        {
            name: "UQ_product_name",
            columns: ['name']

        },
        {
            name: "UQ_product_slug",
            columns: ['slug']

        }
    ]
});
