"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//iniciando o servidor com o express
const app = (0, express_1.default)();
//para fazer um controle de quais os frontend pode acessar o backend
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//importando as rotas
app.use(routes_1.routes);
//chamando a porta e passando uma função para executar assim que liberar a porta.
app.listen(3333, () => {
    console.log('Servidor iniciado com sucesso');
});
