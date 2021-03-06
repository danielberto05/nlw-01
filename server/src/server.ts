import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors);

app.listen(3333);

// Rota: Endereço completo da requisição.
// Recurso: Qual entidade estamos acessando no sistema

// GET: Buscar um ou mais informações do back-end.
// POST: Criar uma nova informação no back-end.
// PUT: Atualizar uma informação existente no back-end.
// DELETE: Remover uma informação do back-end.

// POST http://localhotst:3333/users = Criar um usuário.
// GET http://localhotst:3333/users = Listar usuários.
// GET http://localhotst:3333/users/id = Buscar dados de um usuários específico.

// Request Params: Parâmetros que vem na própria rota que identificam um recurso.
// Query Param: Parâmetros que vem na própria rota geralmente opcionais
//para filtros, paginação e etc.
// Request Body: Parãmetros para criação/atualização de informações.

// SELECT * FROM users WHERE name = 'Daniel'
// knex('users').where('name', 'Daniel').select('*');