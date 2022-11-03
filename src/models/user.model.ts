import {
    getModelForClass,
    index,
    modelOptions,
    pre,
    prop,
} from '@typegoose/typegoose';
import bcrypt from 'bcrypt';

export enum Role {
    Developer,
    SystemAdmin,
    User
}

@index({email: 1})
@pre<User>('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
})
@modelOptions({schemaOptions: {timestamps: true,},})
export class User {
    @prop({unique: true, required: [true, "Имэйл тодорхойгүй байна"]})
    email: string;
    @prop({
        unique: true,
        required: [true, "Нэвтрэх нэр тодорхойгүй байна"],
        minlength: [3, "Нэвтрэх нэр 3-с доошгүй тэмдэгт агуулсан байх ёстой"],
        maxlength: [20, "Нэвтрэх нэр 20-с дээшгүй тэмдэгт агуулсан байх ёстой"]
    })
    username: string;
    @prop({required: [true, "Нууц үг тодорхойгүй байна"]})
    password: string;
    @prop({required: [true, "Эрх тодорхойгүй байна"], default: Role.User})
    role: Role[];
    @prop({
        required: [true, "Регистрийн дугаар тодорхойгүй байна"],
        unique: true,
        minlength: [10, "Регистерийн дугаар буруу байна"],
        maxlength: [10, "Регистерийн дугаар буруу байна"]
    })
    regNo: string;
    @prop({
        required: [true, "Нэр тодорхойгүй байна"],
        minlength: [1, "Нэр 1-ээс доошгүй тэмдэгт агуулсан байх ёстой"],
        maxlength: [50, "Нэр 50-аас ихгүй тэмдэгт агуулсан байх ёстой"]
    })
    firstname: string;
    @prop({
        required: [true, "Овог тодорхойгүй байна"],
        minlength: [1, "Нэр 1-ээс доошгүй тэмдэгт агуулсан байх ёстой"],
        maxlength: [50, "Нэр 50-аас ихгүй тэмдэгт агуулсан байх ёстой"]
    })
    lastname: string;

    async comparePasswords(hashedPassword: string, candidatePassword: string) {
        return await bcrypt.compare(candidatePassword, hashedPassword);
    }
}

const userModel = getModelForClass(User);

export default userModel;
