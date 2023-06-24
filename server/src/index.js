import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
app.use("/recipes",recipesRouter);
mongoose.connect("mongodb+srv://sauravraj000027:mernstack123@foodies.ch1sd8z.mongodb.net/foodies?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.listen(3001, () => console.log("server started!"));