import Router from "koa-router";
import { getCars } from "../../controllers/cars/get-cars.controller";
import { addCar } from "../../controllers/cars/add-car.controller";

const carsRouter = new Router({ prefix: "/cars" });


carsRouter.get("/", getCars);
// create car to one user. id should be token
carsRouter.put("/:userId", addCar);

export { carsRouter };
