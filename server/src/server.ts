import { routes } from './routes';
import express from 'express';
import cors from 'cors';

//iniciando o servidor com o express
const app = express();

//para fazer um controle de quais os frontend pode acessar o backend
app.use(cors());

app.use(express.json());
//importando as rotas
app.use(routes);

//chamando a porta e passando uma função para executar assim que liberar a porta.
app.listen(3333, () => {
    console.log('Servidor iniciado com sucesso');
});
