import { User } from "../../models/user.model.js";

export const deleteUser = async (request, response) => {
  try {
    const userID = request.params.id;
    await User.findByIdAndDelete(userID);
    console.log("User deleted successfully");
    response.status(200).json({ message: "User deleted" });
  } catch (e) {
    console.log(e);
    response.status(500).json({ message: e });
  }
};
