import express, { Request, Response } from "express";
const app = express();
const port = 3001;
app.get("/", (req: Request, res: Response) => {
  res.send("hola mundo! had to start over =( ");
});

app.listen(port, ()=>{
    console.log(`listening on port http://localhost:${port}`)
})