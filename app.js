const express = require("express");
const app = express();
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");

app.use(express.json());

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  }),
);

app.use(helmet());
app.use(cors());
app.use(xss());

// routes
const userRouter = require("./routes/userRoutes");
const petRouter = require("./routes/petRoutes");

app.use("/auth/", userRouter);
app.use("/app/", petRouter);

const port = process.env.PORT || 5001;
app.listen(5001, () => {
  console.log(`Server is running on port: ${port}`);
});
