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