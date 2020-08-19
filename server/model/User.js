const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    // unique: true,
  },
  linkedInId: {
    type: String,
    // unique: true,
  },
  facebookId: {
    type: String,
    // unique: true,
  },
  twitterId: {
    type: String,
    // unique: true,
  },
  name: {
    type: String,
    // trim: true,
  },
  email: {
    type: String,
  },
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,

  photo: {
    type: String,
    default:
      "https://haiyanghongnewbucket.s3-us-west-2.amazonaws.com/hendrix/user/default-user.png",
  },
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
