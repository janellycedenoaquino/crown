//seeding db and
import { app } from "./app";
import env from 'dotenv';
env.config();
const port = process.env.port || 3001;


app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
