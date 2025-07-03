const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello there, my friend!")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
