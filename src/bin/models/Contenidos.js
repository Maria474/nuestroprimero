const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  descripcion: String,
  tiempoprod: String,
  costo: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  song_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song"
    }
  ]
});

var List = mongoose.model("List", ListSchema);
module.exports = List;
