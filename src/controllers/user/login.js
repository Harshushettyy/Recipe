import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../models/user.model.js";
import { ApiResponseCreate } from "../../utils/ApiResponse.js";
export const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response
        .status(400)
        .send(new ApiResponseCreate(400, {}, "Valid fields missing"));
    }
    const existingAccount = await User.findOne({ email });
    if (!existingAccount) {
      response
        .status(400)
        .send(
          new ApiResponseCreate(
            400,
            {},
            "Account doesnot exist ,kindly register"
          )
        );
    }
    const verified = await bcrypt.compare(password, existingAccount.password);
    if (!verified) {
      response
        .status(400)
        .send(new ApiResponseCreate(400, {}, "incorrect creditails"));
    }
    const token = await jwt.sign({ email, password }, process.env.jwt_Sign, {
      expiresIn: "10m",
    });

    response
      .status(200)
      .send(
        new ApiResponseCreate(
          200,
          { token },
          "Account doesnot exist ,kindly register"
        )
      );
  } catch (error) {
    console.log(error);
    response.status(500).send(new ApiResponseCreate(500, { error }, "error"));
  }
};
