import jwt from "jsonwebtoken";
import User from "../models/user.model.js";




async function auth(req, res, next) {
 

  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decodedToken  = jwt.verify(token , "restaurantmanagement123");
    const user = await User.findOne({
      _id: decodedToken ._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error("INVALID TOKEN!");
    }
    req.id = user._id;
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(403);
  }
}

// const middlewareController = {
//   verifyToken: (req,res,next)=> {
//     const token = req.header.token
//     if(token){
//       const accessToken  = token.split(" ")[1]
//       jwt.verify(accessToken ,"restaurantmanagement123",(err,user)=>{
//         if(err){
//           res.status(403).json("Token is not valid")
//         }
//         req.user = user
//         next()
//       } )
//     }else {
//       res.status(401).json("You are not authenticated")
//     }
//   }
// }
// module.exports = middlewareController
export default auth;
