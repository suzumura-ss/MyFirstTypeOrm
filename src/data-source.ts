import "reflect-metadata"
import { DataSource } from "typeorm"
import { Todo } from "./entity/Todo"

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './db/todo.sqlite3',
    synchronize: true,
    logging: false,
    entities: [Todo],
    migrations: [],
    subscribers: [],
})
