import { Document, Model, model, Schema } from 'mongoose';

interface IPermissionMapper extends Document {
	permission: []
	user: string;
}

const permissionMapperSchema: Schema = new Schema({
	permission: [{ type: Schema.Types.ObjectId, ref: 'Permission', required: true }],
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const PermissionMapper: Model<IPermissionMapper> = model(
	'PermissionMapper',
	permissionMapperSchema
);
