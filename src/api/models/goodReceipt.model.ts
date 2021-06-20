import { Document, Model, model, Schema } from 'mongoose';

interface IGoodReceipt extends Document {
	company: string;
	warehouse: string;
	bin: string;
	uom: string;
	user: string;
	stock: string;
	quantity: string;
	created_at: string;
	updated_at: string;
}

const goodReceiptSchema: Schema = new Schema({
	company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
	warehouse: {
		type: Schema.Types.ObjectId,
		ref: 'Warehouse',
		required: true,
	},
	bin: { type: Schema.Types.ObjectId, ref: 'Bin', required: true },
	uom: { type: Schema.Types.ObjectId, ref: 'Uom', required: true },
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	stock: { type: Schema.Types.ObjectId, ref: 'Stock', required: true },
	quantity: { type: String, required: true },
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

export const GoodReceipt: Model<IGoodReceipt> = model(
	'GoodReceipt',
	goodReceiptSchema
);
