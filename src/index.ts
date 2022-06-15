import { AppDataSource } from "./data-source";
import { Todo } from "./entity/Todo";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const todo = Todo.create({
      description: "Make awesome app",
      isDone: false,
      expiredAt: new Date(),
    });
    await todo.save();
    console.log("Saved a new user with id: " + todo.id);

    console.log("Loading users from the database...");
    const items = await Todo.find();
    console.log("Loaded items: ", items);
  })
  .catch((error) => console.log(error));
