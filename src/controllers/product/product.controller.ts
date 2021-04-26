import { Request, Response } from "express"
import slugify from "slugify";
import { Equal, getRepository, ILike } from "typeorm"
import { ProductEntity } from '../../entity/product.entity';

export class ProductController {
    // productReposity = getRepository(ProductEntity)
    constructor() {
    }
    async getProducts(req: Request, res: Response) {
        try {
            const { query = '', limit = 10, start = 0, status } = req.query
            const productReposity = getRepository(ProductEntity)
            const products = await productReposity.find({
                join: {
                    alias: "product",
                    leftJoinAndSelect: {
                        category: "product.category",
                    }
                },
                order: {
                    productId: 'DESC'
                },
                where: [
                    { name: ILike(`%${query}%`) },
                    { description: ILike(`%${query}%`) },
                    { status: Equal(status) },
                ],
                take: 10,
                skip: 0


            })
            res.status(200).json(products)

        } catch (error) {
            return res.status(500).json({ message: 'Error on server', error })
        }
    }
    async createProduct(req: Request, res: Response) {
        try {
            const productReposity = getRepository(ProductEntity)
            const categoryDTO = {
                slug: slugify(req.body.name).toLocaleLowerCase(),
                ...req.body,
            }
            const product = productReposity.create(categoryDTO)
            const results = await productReposity.save(product)
            res.status(200).json(results)

        } catch (error) {
            return res.status(500).json({ message: 'Error on server', error })
        }
    }

}
