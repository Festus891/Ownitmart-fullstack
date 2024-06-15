const express = require("express");
const app = express();
const cors = require("cors");
// module.exports = app;
const corsOptions = {
  origin: "https://ownitmart-1k00ipa2t-aderibigbe-festuss-projects.vercel.app", // your frontend URL
  credentials: true, // This allows cookies to be sent
};
app.use(cors(corsOptions));

const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");

const dotenv = require("dotenv");
const path = require("path");

const errorMiddleware = require("./middlewares/errors");

//setting up config file
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "backend/config/config.env" });
}
// dotenv.config({ path: "backend/config/config.env" });

// Example route
app.get("/", (req, res) => {
  res.send("API is working and CORS-enabled for all origins!");
});

// Increase the limit for JSON bodies
app.use(bodyparser.json({ limit: "50mb" }));

app.use(express.json());
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// import of all route
const products = require("./routes/product");
const auth = require("./routes/auth");
const payment = require("./routes/payment");
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", payment);
app.use("/api/v1", order);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
