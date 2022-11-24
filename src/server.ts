import App from "@/app";
import validateEnv from "@utils/validateEnv";
import { initialDbRun } from "./run";
import TreeRouter from "./routes/tree.route";
import TreeModel from "./models/tree.model";

validateEnv();


const app = new App([new TreeRouter()]);
//initialDbRun().catch(err => console.log(err));

TreeModel.find().then((trees) => { console.log(trees) })
app.express.get('/', (req, res) => {
    res.send('hello world')
})
app.listen();

