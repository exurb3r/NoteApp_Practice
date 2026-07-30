import { Schema, model, Document } from 'mongoose';

export interface INoteUser extends Document {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    role: number;
    joinDate: Date;
}

const NoteUserSchema = new Schema<INoteUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Number, required: true, default: 420 },
    joinDate: { type: Date, default: Date.now },
});

export default model<INoteUser>('NoteUser', NoteUserSchema);