import AwesomeService from "../models/awesomeService.model.js";

export const uploadData = async (req, res) => {
  ///checking if email existed
  const { type, image, name, description } = req.body;

  try {
    // Create a new AwesomeService
    const newAwesomeService = new AwesomeService({
      type: type,
      image: image,
      name: name,

      description: description,
    });
    ///Save User
    await newAwesomeService.save();
    console.log(`Upload newAwesomeService Data Success with name is: ${name}`);
    res.status(200).json({
      success: true,
      message: `Upload newAwesomeService Data Success with name is: ${req.body.name}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};

export const getAwesomeServices = async (req, res) => {
  try {
    const awesomeService = await AwesomeService.find();
    res.json({
      data: awesomeService,
      message: "Get data success",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
