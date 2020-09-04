import { Context, Next } from "koa";
import { docClient } from "../../aws";
import uuid from "uuid";

export const getCars = async (ctx: Context, next: Next) => {
  const params = {
    TableName: "cars",
    Key: {
      id: "asdij8w8hdiuandoio0",
    },
  };

  await docClient
    .get(params)
    .promise()
    .then((response) => {
      ctx.status = 200;
      ctx.body = response;
    })
    .catch((err) => {
      ctx.status = 500;
      console.log(err);
    })
    .finally(() => {
      console.log("Done");
    });

  await next();
};
