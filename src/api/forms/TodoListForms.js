import { v4 as uuidv4 } from 'uuid'

export class StoreOrder {
    id
    name
    price
    note

    constructor(
      id,
      name = '',
      price = -1,
      note = ''
    ) {
        // Version 4 (random) - Created from cryptographically-strong random values
        this.id = id || uuidv4()
        this.name = name
        this.price = price
        this.note = note
    }

    static create({ id, name, price, note }) {
        return new StoreOrder(id, name, price, note)
    }

    static createEmpty() {
        return new StoreOrder(null, 'New order.', 0, 'New note.')
    }
}
