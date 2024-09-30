import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  quantity: number;
  category?: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String },
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
