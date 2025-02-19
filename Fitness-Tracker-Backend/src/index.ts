import { middleware } from "#middlewares/middlewares.js";
import express from "express";

import bodyPartRouter from "./myRoutes/bodypart.route.js";
import equipmentRouter from "./myRoutes/equipment.route.js";
import exerciseRouter from "./myRoutes/exercise.route.js";
import indexRouter from "./myRoutes/index.js";
import targetRouter from "./myRoutes/target.route.js";
const app = express();
const port = process.env.PORT ?? "9001";

app.get("/", middleware);

app.use('/exercise', exerciseRouter);
app.use('/equipment', equipmentRouter);
app.use('/', indexRouter);
app.use('/target', targetRouter);
app.use('/bodypart', bodyPartRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
