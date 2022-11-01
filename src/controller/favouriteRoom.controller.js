import FavouriteRoom from "../models/favouriteRoom.model.js";

export const uploadData = async (req, res) => {
  ///checking if email existed
  const { type, image, name, price, description } = req.body;

  try {
    // Create a new FavouriteRoom
    const newFavouriteRoom = new FavouriteRoom({
      type: type,
      image: image,
      name: name,
      price: price,
      description: description,
    });
    ///Save User
    await newFavouriteRoom.save();
    console.log(`Upload Favourite Room Data Success with name is: ${name}`);
    res.status(200).json({
      success: true,
      message: `Upload Favourite Room Data Success with name is: ${req.body.name}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};

export const getFavouriteRooms = async (req, res) => {
  try {
    const favouriteRoom = await FavouriteRoom.find();
    res.json({
      data: favouriteRoom,
      message: "Get data success",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
