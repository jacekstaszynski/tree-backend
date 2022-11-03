import App from "@/app";
import BedRoute from "@routes/bed.route";
import validateEnv from "@utils/validateEnv";
import UserRoute from "@routes/user.route";
import AuthRoute from "@routes/auth.route";

validateEnv();

const app = new App([new BedRoute(), new UserRoute(), new AuthRoute()]);

app.listen();
