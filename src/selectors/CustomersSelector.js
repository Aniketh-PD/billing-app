export const getCustomer = (customers,id) => {
    const result = customers.find(customer => customer._id === id)
    return result ? result.name : 'unavailable'
}