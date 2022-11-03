import App from "@/app";
import validateEnv from "@utils/validateEnv";
import UserRoute from "@routes/user.route";
import AuthRoute from "@routes/auth.route";
import { run } from "./run";

validateEnv();

const app = new App([new UserRoute(), new AuthRoute()]);

run().catch(err => console.log(err));

app.listen();
