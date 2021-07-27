import { Document, HookNextFunction, Model, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
	company: string;
	fisrtname: string;
	lastname: string;
	email: string;
	title: string;
	phoneNumber: string;
	address: string;
	imageURL: string;
	password: string;
	isAdmin: boolean;
	isActive: boolean;
	isVerified: boolean;
	comparePassword(providedPassword: string): Promise<boolean>;
}

const userSchema: Schema = new Schema({
	company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	email: { type: String, required: true, unique: true},
	password: { type: String, required: true },
	isAdmin: { type: Boolean, default: false },
	title: { type: String },
	phoneNumber: { type: String },
	address: { type: String },
	imageURL: { type: String },
	isActive: { type: Boolean, default: false },
	isVerified: { type: Boolean, default: false },
});

//methods to login user
userSchema.pre('save', async function (next: HookNextFunction) {
	const user = this as IUser;

	//check if password has been modifield
	if (!user.isModified('password')) return next();

	//hashing password
	const salt = await bcrypt.genSalt(10);

	const hash = await bcrypt.hashSync(user.password, salt);

	user.password = hash;

	return next();
});

userSchema.methods.comparePassword = async function (providedPassword: string) {
	const user = this as IUser;

	return bcrypt.compare(providedPassword, user.password).catch((e) => false);
};

export const User: Model<IUser> = model('User', userSchema);
