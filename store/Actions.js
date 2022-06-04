export const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_CART: 'ADD_CART',
    ADD_NOV: 'ADD_NOV',
    ADD_MODAL: 'ADD_MODAL',
    ADD_ORDERS: 'ADD_ORDERS',
    ADD_FAILURE: 'ADD_FAILURE',
    ADD_USERS: 'ADD_USERS',
    ADD_CATEGORIES: 'ADD_CATEGORIES',
}

export const addToCart = (product, cart) => {
    if(product.inStock === 0)
    return ({ type: 'NOTIFY', payload: {error: 'Producto sin stock.'} }) 

    const check = cart.every(item => {
        return item._id !== product._id
    })

    if(!check) return ({ type: 'NOTIFY', payload: {error: 'El producto ya ha sido añadido al carrito. Puede modificar la cantidad entrando a su carrito!'} }) 

    return ({ type: 'ADD_CART', payload: [...cart, {...product, quantity: 1}] }) 
}

export const addToNov = (novedad, novedades) => {
    if(novedad.inStock === 0)
    return ({ type: 'NOTIFY', payload: {error: 'Sin novedad.'} }) 

    const check = novedades.every(item => {
        return item._id !== novedad._id
    })

    if(!check) return ({ type: 'NOTIFY', payload: {error: 'El producto ya ha sido añadido al carrito. Puede modificar la cantidad entrando a su carrito!'} }) 

    return ({ type: 'ADD_NOV', payload: [...novedades, {...novedad}] }) 
}

export const decrease = (data, id) => {
    const newData = [...data]
    newData.forEach(item => {
        if(item._id === id) item.quantity -= 1
    })

    return ({ type: 'ADD_CART', payload: newData })
}

export const increase = (data, id) => {
    const newData = [...data]
    newData.forEach(item => {
        if(item._id === id) item.quantity += 1
    })

    return ({ type: 'ADD_CART', payload: newData })
}


export const deleteItem = (data, id, type) => {
    const newData = data.filter(item => item._id !== id)
    return ({ type, payload: newData})
}

export const updateItem = (data, id, post, type) => {
    const newData = data.map(item => (item._id === id ? post : item))
    return ({ type, payload: newData})
}