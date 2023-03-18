require("dotenv").config();

const express = require("express");
const port = process.env.PORT;
const { errorHandler } = require("./middleware/errorMiddleware.js");
const path = require("path");
const connectDB = require("./config/db.js");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/admins", require("./routes/adminRoutes"));
app.use("/api/restaurants", require("./routes/restaurantsRoutes"));
app.use("/api/order", require("./routes/orderRoutes.js"));

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../frontend/build"), {
      dotfiles: "allow",
    })
  );
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("Website is still on development");
  });
}
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on PORT ${port}`));
