export const getProduct = (products,id) => {
    const result = products.find(prod => prod._id === id)
    return result ? result.name : 'unavailable'
}