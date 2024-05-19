import mongoose from "mongoose";

const Res = mongoose.Schema(
    {
        name: {type: String, required: [true, "Name is required"]},
        email: String,
        image: {
            type: String, default: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAFfFgr3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AYLFikU7sBgYAAAAB10RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABZSURBVFjD7dAxAQAwDAKA+jedxkG4sBF0U+s7U6rrrgwIEDBgwgQIECBAgQIECBAgQIEDBgwgQIECBAgQIECBAgQIEDBgwgQIECBAgQIECBAgQIEDBgwgQJ+7Q7Fv8+ysmhAAAAAElFTkSuQmCC"
        }

    }
);

export default mongoose.models.User || mongoose.model("User", Res);