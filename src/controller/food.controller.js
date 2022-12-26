import Food from "../models/food.model.js";
export const getAllFoods = async (req, res) => {
    try {
        // const food = new Food({
        //     name: "Cá lăng nướng",
        //     price:"70",
        //     image: "https://cdn.tgdd.vn/Files/2021/08/09/1373991/cach-lam-ca-lang-nuong-rieng-me-thom-ngon-nuc-mui-202108091056299358.jpg"
        // })
        // food.save()
        
      const foods = await Food.find();
      res.json({
        data: foods,
        message: "Get data success",
      });
    } catch (error) {
       res.status(404).json({ message: error.message });
     
    }
}
export const getFoodByID = async (req,res) => {
  const foodID = req.params.id
  try {
    const food = await Food.findById(foodID);
    res.json({
      data: food,
      message: "Get data success",
    });
  } catch (error) {
     res.status(404).json({ message: error.message });
   
  }
}
export const deleteFood = async (req,res) => {
    const foodID = req.body._id
    try {
      await Food.findByIdAndDelete({_id:foodID})
      res.status(200).json({
        message: 'Delete a food successful!'
      })
    }catch {error} {
      res.status(404).json({ message: error.message });
    }
  }
  export const createNewFood = async (req,res) => {
    const { name, price, image } = req.body
    try {
      const newFood = new Food ({
        name: name,
        price: price,
        image: image
      })
      await newFood.save()
      res.status(200).json({
        success: true,
        message: 'Create a new food successful!'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Lỗi hệ thống.",
      })
    }
  }
  export const updateFood = async (req,res) => {
    const {name, price, image} = req.body
    try {
      await Food.findByIdAndUpdate({_id: req.params.id},req.body)
      res.status(200).json({
        message: 'Update a food successful!'
      })
    }catch (error) {
      res.status(404).json({message: error.message})
    }
  }