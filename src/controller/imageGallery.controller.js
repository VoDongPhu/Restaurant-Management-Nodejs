import ImageGallery from "../models/imageGallery.model.js";

export const uploadData = async (req, res) => {
  ///checking if email existed
  const { type, image } = req.body;

  try {
    // Create a new ImageGallery
    const newImageGallery = new ImageGallery({
      type: type,
      image: image,
    });
    ///Save User
    await newImageGallery.save();
    console.log(`Upload newImageGallery Data Success with type is: ${type}`);
    res.status(200).json({
      success: true,
      message: `Upload newImageGallery Data Success with type is: ${req.body.type}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};

export const getImageGallerys = async (req, res) => {
  try {
    const imageGallery = await ImageGallery.find();
    res.json({
      data: imageGallery,
      message: "Get data success",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
