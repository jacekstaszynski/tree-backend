import userModel, {User} from "@models/user.model";
import {isEmpty} from "@utils/util";
import {HttpException} from "@exceptions/HttpException";

export default class UserService {
    public users = userModel;

    public async create(user: User): Promise<User> {
        if (isEmpty(user)) throw new HttpException(400, "Хадгалах хэрэглэгч тодорхойгүй байна.");
        user.regNo = user.regNo?.toUpperCase();
        user.username = user.username?.toLowerCase();
        user.email = user.email?.toLowerCase();
        user.firstname = user.firstname?.charAt(0).toUpperCase() + user.firstname?.slice(1).toLowerCase();
        user.lastname = user.lastname?.charAt(0).toUpperCase() + user.lastname?.slice(1).toLowerCase();
        return this.users.create(user);
    }

    public async findUserById(id: string): Promise<User> {
        return this.users.findById(id);
    }
}
