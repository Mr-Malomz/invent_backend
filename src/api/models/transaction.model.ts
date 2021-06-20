import { Document, Model, model, Schema } from 'mongoose';

interface ITransaction extends Document {
	company: string;
	warehouse: string;
	user: string;
	stock: string;
	quantity: string;
	created_at: string;
}

const transactionSchema: Schema = new Schema({
	company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
	warehouse: {
		type: Schema.Types.ObjectId,
		ref: 'Warehouse',
		required: true,
	},
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	stock: { type: Schema.Types.ObjectId, ref: 'Stock', required: true },
	quantity: { type: String, required: true },
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

export const Transaction: Model<ITransaction> = model('Transaction', transactionSchema);
