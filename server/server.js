var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy,
  User = require("./models/user"),
  seedUser1 = require("./seedUser1"),
  seedUser2 = require("./seedUser2"),
  seedUser3 = require("./seedUser3"),
  cors = require("cors"),
  multer = require("multer");
var history = require("connect-history-api-fallback");

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

const PORT = process.env.PORT || 3000;

// mongodb cloud connect string
mongoose.connect(
  "mongodb+srv://sbcruz1:cs467pw@storedatabasev2-em6mz.mongodb.net/test?retryWrites=true",
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(history);

app.use(
  cors({
    origin: ["http://localhost:8080", "http://localhost:8081"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
    credentials: true // enable set cookie
  })
);

app.use(express.static(__dirname + "/public"));

// get the project root directory with req.app.get('root')
app.set("root", __dirname);

// sessions
app.use(
  require("express-session")({
    secret: "mysessionsecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 } // in ms
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Define routes
var userRoutes = require("./routes/users");
var storeRoutes = require("./routes/store");
var productRoutes = require("./routes/products");
var reviewRoutes = require("./routes/ratings");
var orderRoutes = require("./routes/orders");
var cartRoutes = require("./routes/cart");
var addressRoutes = require("./routes/addresses");

// Seed fake users
seedUser1();
seedUser2();
seedUser3();

// serves the front end
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/dist/index.html");
});

// Define paths
app.use("/", userRoutes);
app.use("/shop", storeRoutes);
app.use("/products", productRoutes);
app.use("/reviews", reviewRoutes); // WIP
app.use("/orders", orderRoutes);
app.use("/cart", cartRoutes);
app.use("/address", addressRoutes);

// Handle production
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/dist/"));

  // handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/public/dist/index.html");
  });
}

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
