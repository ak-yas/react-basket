const productsArray = [
  {
    id: 'price_1Lz3lIKEEIxhRDJ8gj9zg5B1',
    title: 'Guitar',
    price: 84.99,
  },
  {
    id: 'price_1Lz3mNKEEIxhRDJ8DskBEWMs',
    title: 'Pen',
    price: 9.99,
  },
  {
    id: 'price_1Lz3n7KEEIxhRDJ8Nvp1ButM',
    title: 'Watch',
    price: 69.99,
  },
]

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id)

  if (!productData) {
    console.log('There is no product for ID: ' + id)
    return null
  }

  return productData
}

export { productsArray, getProductData }
