import { Document, Model, model, Schema } from 'mongoose';

interface ICompany extends Document {
	name: string;
	address: string;
	logoURL: string;
	adminEmail: string;
}

const companySchema: Schema = new Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	logoURL: { type: String, required: true },
	adminEmail: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
	},
});

companySchema.path('adminEmail').validate((email: any) => {
	var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailRegex.test(email.text);
}, 'Please fill a valid email address');

export const Company: Model<ICompany> = model('Company', companySchema);
