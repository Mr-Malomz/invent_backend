import { Document, Model, model, Schema } from 'mongoose';

interface IStock extends Document {
	company: [];
	warehouse: [];
	uom: string;
	bin: [];
	description: string;
	quantity: number;
}

const stockSchema: Schema = new Schema({
	company: [{ type: Schema.Types.ObjectId, ref: 'Company', required: true }],
	warehouse: [
		{ type: Schema.Types.ObjectId, ref: 'Warehouse', required: true },
	],
	uom: { type: Schema.Types.ObjectId, ref: 'UOM', required: true },
	bin: [{ type: Schema.Types.ObjectId, ref: 'Bin' }],
	description: { type: String, required: true },
	qauntity: { type: Number, required: true },
});

export const Stock: Model<IStock> = model('Stock', stockSchema);
