import cookieParser from "cookie-parser";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./src/db/mongoose.js";
import cors from "cors";

const port = process.env.PORT || 3030;
//test
//xu ly form-data
// const multer = require("multer");
// const upload = multer();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(upload.array());
import auth from "./src/routers/auth.routers.js";
import booking from "./src/routers/booking.routers.js";
import favouriteRoom from "./src/routers/favouriteRoom.routers.js";
import awesomeService from "./src/routers/awesomeService.routers.js";
import imageGallery from "./src/routers/imageGallery.routers.js";

app.use("/auth", auth);
app.use("/booking", booking);
app.use("/favouriteRoom", favouriteRoom);
app.use("/awesomeService", awesomeService);
app.use("/imageGallery", imageGallery);
//db connect()
connectDB();

app.listen(port, () =>
  console.log(`Resort managemnt app listening on port ${port}!`)
);
