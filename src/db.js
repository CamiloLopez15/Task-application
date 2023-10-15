import mongoose from "mongoose";
import { URI_BACKEND } from "./config.js";
// Connection to MongoDB

export const connectDB = async () => {
  try {
    await mongoose.connect(URI_BACKEND)

    console.log(">>> Conexión a la basa de datos exitosa")
  } catch (error) {
    console.log("La conexión a la basa de datos fracasó");
    console.log(error)
  }
}