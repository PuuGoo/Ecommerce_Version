import express from "express";
import errorMiddleware from "./middleware/error.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());
// Route Imports

import product from "./routes/productRoute.js";
import user from "./routes/userRoute.js"
import order from "./routes/orderRoute.js"
app.use("/api/v1", product);
app.use("/api/v1", user)
app.use("/api/v1", order)
// Middware for Errors
app.use(errorMiddleware);


export default app;