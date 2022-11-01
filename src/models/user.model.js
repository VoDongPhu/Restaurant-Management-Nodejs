import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    sparse: true,
    index: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  // booking: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bookings" }],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  userObject.tokens = undefined;
  return userObject;
};
///Get User Token
userSchema.methods.getToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    process.env.JWT_SECRET_KEY
  );
  user.tokens.push({ token });
  await user.save();
  return token;
};
//Hash the plain text password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});
///Find User In the database
userSchema.statics.findByCredentials = async (email, password) => {
  let user = await User.findOne({ email });
  if (!user) {
    throw new Error("User does not exist");
  }
  if (password != null) {
    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      throw new Error("Password is not correct");
    }
  }
  return user;
};

const User = mongoose.model("Users", userSchema);
export default User;
