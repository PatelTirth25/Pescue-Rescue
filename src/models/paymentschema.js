import mongoose from "mongoose";

const Res = mongoose.Schema(
  {
    name: String,
    amount: Number,
    oid: String,
    done: {type: Boolean, default : false}
  }
);

export default mongoose.models.Payment || mongoose.model("Payment", Res);