import { Schema, model } from 'mongoose';

// create product schema
const prodSchema = new Schema({
    productId: {
        type: Number,
        required: [true, "Product ID is required"],
    },
    productName: {
        type: String,
        required: [true, "Product name is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1000, "Minimum price is 1000"],
        max: [50000, "Maximum price is 50000"],
    },
    brand: {
        type: String,
        required: [true, "Brand is required"],
    },
}, {
    versionKey: false,
    timestamps: true,
});

// generate prodModel
export const ProdModel = model("prod", prodSchema);