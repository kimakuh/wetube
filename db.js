import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();




mongoose.connect(
  process.env.MONGO_URL, 
  {
    useNewUrlParser:true,
    useFindAndModify: false
  }
);


const db = mongoose.connection;

const handleOpen = () => console.log("db 연걸됨!");
const handleError = () => console.log("db 에러!!");

db.once("open", handleOpen);
db.on("error", handleError)