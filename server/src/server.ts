import { routes } from './routes';
import express from 'express';

//iniciando o servidor com o express
const app = express();

app.use(express.json());
//importando as rotas
app.use(routes);

//chamando a porta e passando uma função para executar assim que liberar a porta.
app.listen(3333, () => {
    console.log('Servidor iniciado com sucesso');
});
