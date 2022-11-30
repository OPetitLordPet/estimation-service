"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const estimation_helpers_1 = require("./src/estimation-service/estimation-helpers");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const estimation = (0, estimation_helpers_1.getEstimation)();
app.get("/", (req, res) => {
    res.send(`Estimation: ${estimation}`);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
