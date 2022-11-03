// import {
//     getModelForClass,
//     index,
//     modelOptions,
//     pre,
//     prop,
// } from '@typegoose/typegoose';
// import bcrypt from 'bcrypt';

// export enum Role {
//     Developer,
//     SystemAdmin,
//     User
// }

// @index({ email: 1 })
// @pre<User>('save', async function () {
//     if (!this.isModified('password')) return;
//     this.password = await bcrypt.hash(this.password, 10);
// })
// @modelOptions({ schemaOptions: { timestamps: true, }, })
// export class User {
//     @prop({ unique: true, required: [true, "Email is unknown"] })
//     email: string;
//     @prop({
//         unique: true,
//         required: [true, "Login name is unknown"],
//         minlength: [3, "Login name must contain at least 3 characters"],
//         maxlength: [20, "Login name must contain no more than 20 characters"]
//     })
//     username: string;
//     @prop({ required: [true, "Password is unknown"] })
//     password: string;
//     @prop({ required: [true, "Role not defined"], default: Role.User })
//     role: Role[];
//     @prop({
//         required: [true, "Register number is unknown"],
//         unique: true,
//         minlength: [10, "Invalid register number"],
//         maxlength: [10, "Invalid register number"]
//     })
//     regNo: string;
//     @prop({
//         required: [true, "Name is unknown"],
//         minlength: [1, "Name must contain at least 1 character"],
//         maxlength: [50, "Name must contain no more than 50 characters"]
//     })
//     firstname: string;
//     @prop({
//         required: [true, "Last name is unknown"],
//         minlength: [1, "Name must contain at least 1 character"],
//         maxlength: [50, "Name must contain no more than 50 characters"]
//     })
//     lastname: string;

//     async comparePasswords(hashedPassword: string, candidatePassword: string) {
//         return await bcrypt.compare(candidatePassword, hashedPassword);
//     }
// }

// const userModel = getModelForClass(User);

// export default userModel;