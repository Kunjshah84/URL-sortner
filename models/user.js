import mongoose from "mongoose"

const urlschema = new mongoose.Schema({
    sortid: {
        type: String,
        require: true,
        unique: true
    },
    redirectul: {
        type: String,
        require: true
    },
    visithistory: [{ timestamps: { type: Number } }],
}, { timestamps: true })

const url = mongoose.model('url', urlschema)
export default url