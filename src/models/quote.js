const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuoteSchema = new Schema({
    content: { type: String, required: true },
    saidwho: { type: Schema.Types.ObjectId, ref: "Character", required: true },
})

const Quote = mongoose.model('Quote', QuoteSchema)

module.exports = Quote