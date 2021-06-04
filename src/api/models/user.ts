import { Document, Model, model, Schema } from 'mongoose';

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
	salt: string;
	isActive: boolean;
	isVerified: boolean;
}

const userSchema: Schema = new Schema({
	company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	salt: { type: String, required: true },
	title: { type: String },
	phoneNumber: { type: String },
	address: { type: String },
	imageURL: { type: String },
	isActive: { type: Boolean, default: false },
	isVerified: { type: Boolean, default: false },
});

export const User: Model<IUser> = model('User', userSchema);
