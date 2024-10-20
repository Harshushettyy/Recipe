import mongoose from "mongoose";

export const foodConnect = async (req, res) => {
  try {
    console.log("Waiting for Connection");
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected successfully");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
