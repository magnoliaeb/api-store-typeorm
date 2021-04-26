import { Request, Response } from "express"
import { getRepository, ILike } from "typeorm";
import { CategoryEntity } from '../../entity/category.entity';

export const getCategories = async (req: Request, res:Response) => {
    try {
        
        const { 
            query = '', limit = 10, start = 0,
            order_field = '', // categoryId // name // description
            order_direction = 'DESC' } = req.query

        // const order_direction = 'DESC' 
        const categoryReposity = getRepository(CategoryEntity)
        const categories = await categoryReposity.find({
            
            where: [
                { name: ILike(`%${query}%`) },
                { description: ILike(`%${query}%`) },
            ],
            
            order: {
                categoryId: 'DESC'
            } ,
            take: Number(start),
            skip: Number(limit)
        })
        res.status(200).json(categories)
        
    } catch (error) {
        return res.status(500).json({ message: 'Error on server', error})
    }
}