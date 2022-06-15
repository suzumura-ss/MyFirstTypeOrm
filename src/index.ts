import { AppDataSource } from "./data-source"
import { Todo } from "./entity/Todo"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const todo = new Todo()
    todo.description = "Make awesome app"
    todo.isDone = false
    await AppDataSource.manager.save(todo)
    console.log("Saved a new user with id: " + todo.id)

    console.log("Loading users from the database...")
    const items = await AppDataSource.manager.find(Todo)
    console.log("Loaded items: ", items)
}).catch(error => console.log(error))
