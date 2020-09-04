import Router from "koa-router";
import {addUser} from "../../controllers/users/add-user.controller"


const usersRouter = new Router({ prefix: "/users" });
//  id should be token
usersRouter.put("/:userId", addUser);

export { usersRouter };
