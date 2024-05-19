import mongoose from "mongoose";

const Res = mongoose.Schema(
  {
    name: {type: String,required: [true,'Name is required!']},
    phone: {type: Number,required: [true,'Mobile Number is required!']},
    date: {type: Date,required: [true,'Date is required!']},
    city: {type: String,required: [true,'City is required!']},
    animal: {type: String,required: [true,'Animal Type is required!']},
    email: {type: String,required: [true, 'Email is required!']}
  }
);

export default mongoose.models.Adopt || mongoose.model("Adopt", Res);