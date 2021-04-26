import { Request, Response } from "express"
import { getRepository } from "typeorm";

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const categoryReposity = getRepository('Category')
        const category = await categoryReposity.update({ categoryId: id }, req.body)
        res.status(200).json(category)

    } catch (error) {
        return res.status(500).json({ message: 'Error on server', error })
    }
}