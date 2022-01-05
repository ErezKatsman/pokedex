const app = require("./app");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/mongoDB");

connectDB();

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
