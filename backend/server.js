const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { sequelize } = require("./src/models");
const routes = require("./src/routes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Task Management API Running"
    });
});

const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        console.log("Database Synced");
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/api/v1", routes);

const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./src/docs/swagger");

app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerSpec)
);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});