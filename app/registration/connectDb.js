import mongoose from "mongoose";

export default async () => {
  console.log(process.env.DATABASE_URL);
  console.log(process.env.SECURITY_KEY);
  await mongoose.connect(
    // "mongodb+srv://ahmadrazakhalid110:RM1dpnTg0GoXyy4A@cluster0.4fv7dem.mongodb.net/"
    // "mongodb://127.0.0.1:27017/"
    process.env.DATABASE_URL
  );
};
