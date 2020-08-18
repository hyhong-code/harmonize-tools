const express = require("express");
const passport = require("../config/passport");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User");

var async = require("async");
var crypto = require("crypto");
var nodemailer = require("nodemailer");

// register
router.post("/register", async (req, res) => {
  const body = req.body;
  if (body.email) {
    const existing = await User.findOne({ email: body.email }).countDocuments();
    if (existing) {
      // -> error handling: duplicate email
      res.json({ error: "Email already exists" });
      return;
    }

    if (body.password) {
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password, salt);
      try {
        const newUser = new User(body);
        await newUser.save();
        // login
        req.logIn(newUser, function () {
          // -> after login, redirect to previous page
          res.redirect("/orgchart/app");
        });
      } catch (error) {
        // -> internal error handling
        console.log(error);
      }
    } else {
      // -> empty password error handling
      res.json({ error: "Password cannot be empty" });
      return;
    }
  } else {
    // empty email error handling
    res.json({ error: "Email cannot be empty" });
    return;
  }
});

// login
router.post(
  "/login",
  passport.authenticate("local", {
    // redirect previous page
    successRedirect: "/orgchart/app",
    failureRedirect: "/login",
  }),
  function (req, res) {}
);

// forget password, send conformation email
router.post("/forgot", function (req, res, next) {
  async.waterfall(
    [
      function (done) {
        crypto.randomBytes(20, function (err, buf) {
          var token = buf.toString("hex");
          done(err, token);
        });
      },
      function (token, done) {
        User.findOne({ email: req.body.email }, function (err, user) {
          if (!user) {
            // -> account not found error handling
            res.json({ error: "No account with that email address exists" });
            return;
          }

          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
          user.save(function (err) {
            done(err, token, user);
          });
        });
      },
      function (token, user, done) {
        var smtpTransport = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "LUGEPEI1993@gmail.com",
            pass: process.env.GMAILPW,
          },
        });
        var mailOptions = {
          to: user.email,
          from: "LUGEPEI1993@gmail.com",
          subject: "harmonizetools.com Password Reset",
          text:
            "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
            "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
            "http://" +
            req.headers.host +
            "/api/v1/auth/reset/" +
            token +
            "\n\n" +
            "If you did not request this, please ignore this email and your password will remain unchanged.\n",
        };
        smtpTransport.sendMail(mailOptions, function (err) {
          res.json({
            success:
              "An e-mail has been sent to " +
              user.email +
              " with further instructions.",
          });
          done(err, "done");
        });
      },
    ],
    function (err) {
      // -> internal error handling
      if (err) return next(err);
      res.redirect("/forgot");
    }
  );
});

// match resetPasswordToken
// router.get('/reset/:token', function(req, res) {
//   User.findOne({
//     resetPasswordToken: req.params.token,
//     resetPasswordExpires: { $gt: Date.now() }
//   },
//   function(err, user) {
//     if (!user) {
//       req.flash('error', 'Password reset token is invalid or has expired.');
//       return res.redirect('/forgot');
//     }

//     res.render('reset', {token: req.params.token});
//   });
// });

// reset password and come back
router.post("/reset/:token", function (req, res) {
  async.waterfall(
    [
      function (done) {
        User.findOne(
          {
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() },
          },
          function (err, user) {
            if (!user) {
              // -> invalid token error handling
              res.json({
                error: "Password reset token is invalid or has expired",
              });
              return;
            }
            if (!req.body.password || !req.body.confirm) {
              // two password does not match error handling
              res.json({ error: "Password does not match Confirm" });
              return;
            }

            if (req.body.password === req.body.confirm) {
              user.setPassword(req.body.password, function (err) {
                user.resetPasswordToken = undefined;
                user.resetPasswordExpires = undefined;
                user.save(function (err) {
                  // login
                  req.logIn(user, function (err) {
                    done(err, user);
                  });
                });
              });
            } else {
              // -> error handling: "password" !=  "confirm"
              res.json({ error: "Passwords do not match" });
              return res.redirect("/forgot");
            }
          }
        );
      },
      function (user, done) {
        var smtpTransport = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "LUGEPEI1993@gmail.com",
            pass: process.env.GMAILPW,
          },
        });
        var mailOptions = {
          to: user.email,
          from: "LUGEPEI1993@gmail.com",
          subject: "Your password has been changed",
          text:
            "Hello,\n\n" +
            "This is a confirmation that the password for your account " +
            user.email +
            " has just been changed.\n",
        };
        smtpTransport.sendMail(mailOptions, function (err) {
          res.json({ success: "Success! Your password has been changed" });
          done(err);
        });
      },
    ],
    function (err) {
      // -> internal error handling
      res.redirect("/forgot");
    }
  );
});

router.get("/google", passport.authenticate("google"));
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  if (process.env.NODE_ENV !== "production") {
    return res.redirect("http://localhost:3000/app");
  }
  return res.redirect("/app");
});

router.get("/linkedin", passport.authenticate("linkedin"));
router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin"),
  (req, res) => {
    if (process.env.NODE_ENV !== "production") {
      return res.redirect("http://localhost:3000/app");
    }
    return res.redirect("/app");
  }
);

router.get("/facebook", passport.authenticate("facebook"));
router.get(
  "/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    if (process.env.NODE_ENV !== "production") {
      return res.redirect("http://localhost:3000/app");
    }
    return res.redirect("/app");
  }
);

router.get("/twitter", passport.authenticate("twitter"));
router.get(
  "/twitter/callback",
  passport.authenticate("twitter"),
  (req, res) => {
    if (process.env.NODE_ENV !== "production") {
      return res.redirect("http://localhost:3000/app");
    }
    return res.redirect("/app");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ status: "success" });
});
router.get("/user", (req, res) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ status: "failed", message: "User not logged in" });
  }
  return res.status(200).json({ status: "success", user: req.user });
});

module.exports = router;
