import { Request, Response } from "express"
import { getRepository } from "typeorm";

export const deleteCategoryById = async (req: Request, res:Response) => {
    try {
        const { id } = req.params
        const categoryReposity = getRepository('Category')
        const category = await categoryReposity.delete({ id })
        if (!category) {
            res.status(404).json({ message: 'Categoria no encontrada'})
            
        }
        res.status(200).json(category)
        
    } catch (error) {
        return res.status(500).json({ message: 'Error on server'})
    }
}