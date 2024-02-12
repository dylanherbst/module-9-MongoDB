const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
        required: true
      },
postTitle: { type: String, trim: true, required: true },
postDesc: { type: String, trim: true, required: true },
media: { type: String, trim: true, required: false },
createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model("post", postSchema);