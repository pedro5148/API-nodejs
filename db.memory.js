import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #movimentos = new Map()
    
    list(search) {
        return Array.from(this.#movimentos.entries())
            .map((movArray) => {
            const id = movArray[0] // retorna somente o id do movimento
            const data = movArray[1] // retorna outras info

            return {
                id,
                ...data, //spred operator
            }
            })
            .filter(movimento => { //query parameters, filtrando pela origem
                if(search) {
                    return movimento.origem.includes(search)
                }
                return true
            })
    }
    create(mov) {
        const movId = randomUUID();
        this.#movimentos.set(movId, mov)
    }

    update(id, mov) {
        this.#movimentos.set(id, mov)
    }

    delete(id) {
        this.#movimentos.delete(id)
    }
}
