import { Document, Model, model, Schema } from 'mongoose';

export interface IWarehouse extends Document {
	company: string;
	bin: [];
	name: string;
	address: string;
}

const warehouseSchema: Schema = new Schema({
	company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
	bin: [{ type: Schema.Types.ObjectId, ref: 'Bin'}],
	name: { type: String, required: true },
	address: { type: String, required: true },
});

export const Warehouse: Model<IWarehouse> = model('Warehouse', warehouseSchema);
