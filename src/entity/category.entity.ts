import { EntitySchema } from 'typeorm'
import { BaseColumnSchemaPart } from './BaseColumnSchemaPart';
import { Category } from '../interface/category.interface';

export const CategoryEntity = new EntitySchema<Category>({
    name: "Category",
    tableName: "categories",
    target: Category,
    columns: {
        ...BaseColumnSchemaPart,
        categoryId: {
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
        description: {
            type: 'text',
            nullable: true
        },
        status: {
            type: 'boolean',
            default: true,
        },

    },

    uniques: [
        {
            name: "UQ_category_name",
            columns: [
                'name'
            ]

        },
        {
            name: "UQ_category_slug",
            columns: [
                'slug'
            ]

        }
    ]
});
