import TableType from "../models/tableType.model.js";

export const uploadData = async (req, res) => {
  ///checking if email existed
  const { type, image, name, price, description } = req.body;

  try {
    // Create a new FavouriteRoom
    const newTableType = new TableType({
      type: type,
      image: image,
      name: name,
      price: price,
      description: description,
    });
    ///Save User
    await newTableType.save();
    console.log(`Upload Table Type Data Success with name is: ${name}`);
    res.status(200).json({
      success: true,
      message: `Upload Table Type  Data Success with name is: ${req.body.name}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};

export const getTableTypes = async (req, res) => {
  try {
    const tableType = await TableType.find();
    res.json({
      data: tableType,
      message: "Get data success",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getTableByID = async (req,res) => {
  const tableID = req.params.id
  try {
    const table = await TableType.findById(tableID);
    res.json({
      data: table,
      message: "Get data success",
    });
  } catch (error) {
     res.status(404).json({ message: error.message });
   
  }
}
export const deteteTable = async (req,res) => {
  const tableID = req.body._id
  try {
    await TableType.findByIdAndDelete({_id:tableID})
    
    res.status(200).json({
      message: 'Delete a table successful!'
    })
  }catch {error} {
    res.status(404).json({ message: error.message });
  }
}
export const updateTable = async (req,res) => {
  const {type, name, price, description, image} = req.body
  try {
    await TableType.findByIdAndUpdate({_id: req.params.id},req.body)
    res.status(200).json({
      message: 'Update a user successful!'
    })
  }catch (error) {
    res.status(404).json({message: error.message})
  }
}