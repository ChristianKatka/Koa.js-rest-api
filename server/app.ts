import Koa from "koa";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { logRequestAndResponse } from "./middlewares/request-response-logger.middleware";
import { carsRouter } from "./routers/cars/cars.router";
import { usersRouter } from "./routers/users/users.router";



const app = new Koa();

app.use(json());
app.use(bodyParser());
app.use(cors());

app.use(logRequestAndResponse);

app.use(carsRouter.routes()).use(carsRouter.allowedMethods());
app.use(usersRouter.routes()).use(usersRouter.allowedMethods());


export { app };
