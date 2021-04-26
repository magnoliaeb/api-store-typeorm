import { createConnection } from "typeorm";
import { CategoryEntity, ProductEntity } from '../entity/index'



export const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "storedb",
    synchronize: true,
    logging: true,
    entities: [
        CategoryEntity, ProductEntity
    ]
})

