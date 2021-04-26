import { Request, Response } from "express"
import { getRepository } from "typeorm";
import slugify from 'slugify'
import { CategoryEntity } from "../../entity";

export const createCategory = async (req: Request, res: Response) => {
    try {
        const categoryReposity = getRepository(CategoryEntity)
        const categoryDTO = {
            slug: slugify(req.body.name).toLocaleLowerCase() ,
            ...req.body,
        }
        const category = categoryReposity.create(categoryDTO)
        const results = await categoryReposity.save(category)
        res.status(200).json(results)

    } catch (error) {
        return res.status(500).json({ message: 'Error on server', error })
    }
}

