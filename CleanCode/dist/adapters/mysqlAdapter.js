"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const mysqlDb = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "clean_db"
});
exports.default = mysqlDb;
