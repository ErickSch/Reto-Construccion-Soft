import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name: {type: String, trim: true, unique: true, required: true}, price: {type: Number, default: 0}
}, 
{
    timestamps: true
})

const pruebaSchema = mongoose.Schema({
    numero: {type: Number, default: 0}, palabra: {type: String, trim: true, unique: true, required: true}
}, 
{
    timestamps: true
})

// export default mongoose.model("Item", itemSchema);
export default mongoose.model("Prueba", pruebaSchema);