import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../models/user.model.js";
import { ApiResponseCreate } from "../../utils/ApiResponse.js";

export const createUser = async (request, response) => {
  try {
    const { name, email, phone, password } = request.body;

    if (!name || !email || !phone || !password) {
      return response
        .status(400)
        .send(new ApiResponseCreate(400, {}, "Valid fields missing"));
    }

    const hashed = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      name,
      email,
      phone,
      password: hashed,
    });

    const token = await jwt.sign(
      { name, email, _id: createdUser._id },
      process.env.jwt_Sign,
      {
        expiresIn: "10m",
      }
    );
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return response
        .status(400)
        .send(new ApiResponseCreate(400, {}, "User already existed"));
    }
    response
      .status(202)
      .send(new ApiResponseCreate(202, { token }, "User created successfully"));
  } catch (e) {
    console.log(e);
    response
      .status(500)
      .send(new ApiResponseCreate(500, {}, "User not created"));
  }
};
