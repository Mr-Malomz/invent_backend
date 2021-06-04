import { Document, Model, model, Schema } from 'mongoose';

interface ICompany extends Document {
	name: string;
	address: string;
	logoURL: string;
}

const companySchema: Schema = new Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	logoURL: { type: String, required: true },
});

export const Company: Model<ICompany> = model('Company', companySchema);
