import { Document, Model, model, Schema } from 'mongoose';

export interface IUOM extends Document {
	name: string;
}

const binSchema: Schema = new Schema({
	name: { type: String, required: true },
});

export const Bin: Model<IUOM> = model('UOM', binSchema);
