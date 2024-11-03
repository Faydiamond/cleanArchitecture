"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysqlAdapter_1 = __importDefault(require("./adapters/mysqlAdapter"));
console.log("Cabronazo! ");
mysqlAdapter_1.default.connect((err) => {
    if (!err) {
        console.log(`Conexion exitosa`);
    }
    else {
        console.log(`Error al conectarse con la base de datos, el error es: ${err}`);
    }
});
