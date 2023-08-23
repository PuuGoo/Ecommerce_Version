import app from "./app.js";

import dotenv from "dotenv";

import connectDatabase from "./config/database.js";

import mongoose from "mongoose";
main().catch(err => console.log(err));
async function main() {

    // Config

    dotenv.config({
        path: "backend/config/config.env"
    })

    // Connecting to database
    await connectDatabase();


    app.listen(process.env.PORT, () => {
        console.log(`Server is working on http://localhost:${process.env.PORT}`);
    })

}