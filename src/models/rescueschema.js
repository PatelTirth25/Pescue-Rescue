import mongoose from "mongoose";

const Res = mongoose.Schema(
  {
    location: {type: String, required: [true, 'Location is required!']},
    image: {type: String,required: [true, 'Image is required!']},
    email: {type: String,required: [true, 'Email is required!']}
  }
);

export default mongoose.models.Rescue || mongoose.model("Rescue", Res);