import mongoose from "mongoose";

const imageGallerySchema = new mongoose.Schema({
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
});

const ImageGallery = mongoose.model("ImageGallerys", imageGallerySchema);
export default ImageGallery;
