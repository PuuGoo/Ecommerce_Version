import express from "express";
import errorMiddleware from "./middleware/error.js";

const app = express();

app.use(express.json());
// Route Imports

import product from "./routes/productRoute.js";

app.use("/api/v1", product);

// Middware for Errors
app.use(errorMiddleware);


export default app;