import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import { userApp } from "./APIs/userAPI.js";
import { authorApp } from "./APIs/authorAPI.js";
import { adminApp } from "./APIs/adminAPI.js";
import { commonApp } from "./APIs/commonAPI.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();

const app = exp();

// CORS
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Middlewares
app.use(cookieParser());
app.use(exp.json()); 

// Routes
app.use("/user-api", userApp);
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);
app.use("/common-api", commonApp);

// DB connect
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB server connected");

    const port = process.env.PORT || 5000;
    app.listen(port, () =>
      console.log(`server listening on ${port}..`)
    );
  } catch (err) {
    console.log("err in db connect", err);
  }
};

connectDB();

// Invalid path
app.use((req, res) => {
  res.status(404).json({ message: `path ${req.url} is invalid` });
});

// Error handler
app.use((err, req, res, next) => {
  console.log("error is ", err);

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ message: err.message });
  }

  const errCode =
    err.code ?? err.cause?.code ?? err.errorResponse?.code;

  const keyValue =
    err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];

    return res.status(409).json({
      message: `${field} "${value}" already exists`,
    });
  }

  res.status(500).json({ message: "Server side error" });
});