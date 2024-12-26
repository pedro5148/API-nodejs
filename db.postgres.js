import { randomUUID } from "node:crypto"
import { sql } from './connect.js'

export class DatabasePostgres {
    
async list(search) {
    let mov

    if (search) {
        mov = await sql`select * from movimentos where origem ilike ${'%' + search + '%'}`
    } else {
        mov = await sql`select * from movimentos`
    }
    return mov
}

async create(mov) {
    const movId = randomUUID()
    const { origem, tipo, data, valor } = mov

    await sql`insert into movimentos (id, origem, tipo, data, valor) values (${movId}, ${origem}, ${tipo}, ${data}, ${valor})`
}

async update(id, mov) {
    const { origem, tipo, data, valor } = mov
    await sql`update movimentos set origem = ${origem}, tipo = ${tipo}, data = ${data}, valor = ${valor} where id = ${id}`
}

async delete(id) {
    await sql`delete from movimentos where id = ${id}`
}
}
