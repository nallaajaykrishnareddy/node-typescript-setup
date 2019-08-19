import express, { Application, Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 5000;
const add = (a: number, b: number): number => a + b;
app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
  console.log(add(5, 8));
});
app.listen(PORT, () => console.log("server running"));
