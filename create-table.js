import { sql } from './connect.js'

// sql`DROP TABLE IF EXISTS movimentos`.then(() => {
//     console.log("tabela apagada")
// })
// .catch((error) => {
//     console.error("Erro ao apagar tabela:", error);
//   });

sql`
CREATE TABLE movimentos (
    id      UUID PRIMARY KEY,
    origem  TEXT,
    tipo    TEXT,
    data    TIMESTAMP,
    valor   DOUBLE PRECISION
);
`.then(() => {
    console.log("tabela criada")
})
.catch((error) => {
    console.error("Erro ao criar tabela:", error);
  });

// Testar o uso do sequence para geracao dos id's

// sql`
//   CREATE SEQUENCE IF NOT EXISTS movimentos_id_seq
//     INCREMENT 1
//     START 1
//     MINVALUE 1
//     MAXVALUE 2147483647
//     CACHE 1;

// CREATE TABLE movimentos (
//     id BIGINT PRIMARY KEY DEFAULT nextval('movimentos_id_seq'),
//     origem TEXT,
//     tipo TEXT,
//     data TIMESTAMP,
//     valor DOUBLE PRECISION
// );`
// .then(() => {
//     console.log("tabela criada")
// })
// .catch((error) => {
//     console.error("Erro ao criar tabela:", error);
//   });