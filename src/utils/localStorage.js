const KEY = 'key-avhw'

// method name 'find' means it might get value or null.
export const find = () => {
    const target = JSON.parse(localStorage.getItem(KEY))
    return target && target.length ? target : null
}

export const update = order => {
    localStorage.setItem(KEY, JSON.stringify(order))
}
