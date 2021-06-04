import { Document, Model, model, Schema } from 'mongoose';

interface IBin extends Document {
	warehouse: [];
	stock: [];
	name: string;
}

const binSchema: Schema = new Schema({
	warehouse: [{ type: Schema.Types.ObjectId, ref: 'Warehouse', required: true }],
	stock: [{ type: Schema.Types.ObjectId, ref: 'Stock' }],
	name: { type: String, required: true },
});

export const Bin: Model<IBin> = model('Bin', binSchema);
