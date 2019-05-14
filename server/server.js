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

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);
// v1 - local
/*
mongoose.connect("mongodb://localhost/StoreDatabase", {
  useNewUrlParser: true,
  useCreateIndex: true
});
*/

// v2 - attempt to use mongodb cloud - acceptance testing

mongoose.connect(
  "mongodb+srv://sbcruz1:cs467pw@storedatabasev2-em6mz.mongodb.net/test?retryWrites=true",
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
);
// end v2

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(cors({
  origin:["http://localhost:8080", "http://localhost:8081"],
  methods:['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  credentials: true // enable set cookie
}));

app.use(express.static(__dirname + "/dist"))

app.use(
  require("express-session")({
    secret: "mysessionsecretkey",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//multer storage functinoality, will save the image paths to a local folder

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./images");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({ storage: storage });
var userRoutes = require("./routes/users");
var storeRoutes = require("./routes/store");
var productRoutes = require("./routes/products"); // for testing
 var reviewRoutes = require("./routes/ratings")  // WIP

seedUser1();
seedUser2();
seedUser3();
 
// serves the front end
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/dist/index.html")
})


app.use("/", userRoutes);
app.use("/shop", storeRoutes);
app.use("/products", productRoutes); // for testing
app.use("/reviews", reviewRoutes) // WIP

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
