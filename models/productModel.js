import mongoose from 'mongoose';
const Schema = mongoose.Schema;


export const ProductSchema = new Schema({
    Id: {
        type: String
    },
    Data: {
        type: Schema.Types.Mixed,
        required: true
    }
})


export const ProductData = mongoose.model('Products', ProductSchema);

