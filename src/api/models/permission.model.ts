import { Document, Model, model, Schema } from 'mongoose';

export interface IPermission extends Document {
	name: string;
}

const permissionSchema: Schema = new Schema({
	name: { type: String, required: true },
});

export const Permission: Model<IPermission> = model(
	'Permission',
	permissionSchema
);
