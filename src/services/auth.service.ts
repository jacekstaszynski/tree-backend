import userModel, {User} from "@models/user.model";
import {isEmpty} from "@utils/util";
import {HttpException} from "@exceptions/HttpException";
import {signJWT} from "@middlewares/jwt.middleware";

export default class AuthService {
    public users = userModel;

    public async login(username: string, password: string): Promise<string> {
        if (isEmpty(username) || isEmpty(password)) throw new HttpException(400, "Шаардлагатай талбарыг бөглөнө үү");
        const user: User = await this.users.findOne({username});
        if (!user || !(await user.comparePasswords(user.password, password))) throw new HttpException(401, "Нэвтрэх нэр эсвэл нууц үг буруу байна");
        return signJWT(user);
    }
}
