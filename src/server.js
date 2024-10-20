import http from "http";
import "dotenv/config";
import { app } from "./app.js";
import { foodConnect } from "./db/food.connect.js";

const Server = http.createServer(app);

const PORT = process.env.PORT;

foodConnect().then(() => {
  Server.listen(PORT, () => {
    console.log(`Server is listening to PORT no:- ${PORT}`);
  });
});
