import mongoose from "mongoose";

const favouriteRoomSchema = new mongoose.Schema({
  type: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
});

const FavouriteRoom = mongoose.model("FavouriteRooms", favouriteRoomSchema);
export default FavouriteRoom;
