import { models, mongoose } from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false, required: true },
    password: { type: String, required: true },
    picture: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/3d-simple-user-icon-isolated_169241-7120.jpg?w=740",
    },
  },
  {
    timestamps: true,
  }
);
const User = models.USer || mongoose.model("User", userSchema);
export default User;
