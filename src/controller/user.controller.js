
import User from "../models/user.model.js";
// export const handleGetAllUsers = async (req, res) => {
//   let id = req.query.id
//   if(!id){
//     return res.status(200).json({
//       errCode: 0,
//       errMessage: 'Missing required parameters',
//       users : []
//     })
//   }
//   let users = await userService.getAllUsers(id)
//   return res.status(200).json({
//     errCode: 0,
//     errMessage:'OK',
//     users
//   })
// }
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      data: users,
      message: "Get data success",
    });
  } catch (error) {
     res.status(404).json({ message: error.message });
   
  }
}
export const getUserByID = async (req,res) => {
  const userID = req.params.id
  try {
    const user = await User.findById(userID);
    res.json({
      data: user,
      message: "Get data success",
    });
  } catch (error) {
     res.status(404).json({ message: error.message });
   
  }
}
export const createNewUser = async (req,res) => {
  const { fullname, email, password } = req.body
  try {
    const newUser = new User ({
      fullname: fullname,
      email: email,
      password: password
    })
    await newUser.save()
    res.status(200).json({
      success: true,
      message: 'Create a new user successful!'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    })
  }
}
export const deteteUser = async (req,res) => {
  const userID = req.body._id
  try {
    await User.findByIdAndDelete({_id:userID})
    
    res.status(200).json({
      message: 'Delete a user successful!'
    })
  }catch {error} {
    res.status(404).json({ message: error.message });
  }
}
export const updateUser = async (req,res) => {
  const {fullname, email} = req.body
  try {
    await User.findByIdAndUpdate({_id: req.params.id},req.body)
    res.status(200).json({
      message: 'Update a user successful!'
    })
  }catch (error) {
    res.status(404).json({message: error.message})
  }
}