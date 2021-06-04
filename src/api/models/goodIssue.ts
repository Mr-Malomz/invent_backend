import { Document, Model, model, Schema } from 'mongoose';

interface IGoodIssue extends Document {
	company: string;
	warehouse: string;
	bin: string;
	uom: string;
	itemRequest: string;
	requester: string;
	approval: string;
	stock: string;
	quantity: string;
	created_at: string;
	updated_at: string;
}

const goodIssueSchema: Schema = new Schema({
	company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
	warehouse: {
		type: Schema.Types.ObjectId,
		ref: 'Warehouse',
		required: true,
	},
	bin: { type: Schema.Types.ObjectId, ref: 'Bin', required: true },
	uom: { type: Schema.Types.ObjectId, ref: 'Uom', required: true },
	itemRequest: {
		type: Schema.Types.ObjectId,
		ref: 'ItemRequest',
		required: true,
	},
	requester: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	approval: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	stock: { type: Schema.Types.ObjectId, ref: 'Stock', required: true },
	quantity: { type: String, required: true },
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

export const GoodIssue: Model<IGoodIssue> = model('GoodIssue', goodIssueSchema);
