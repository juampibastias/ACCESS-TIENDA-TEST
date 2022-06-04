import mongoose from 'mongoose'

const productSchemaNov = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

let DatasetNov = mongoose.models.product || mongoose.model('product', productSchemaNov)
export default DatasetNov