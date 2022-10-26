const productsArray = [
  {
    id: '1',
    title: 'Guitar',
    price: 84.99,
  },
  {
    id: '2',
    title: 'Pen',
    price: 9.99,
  },
  {
    id: '3',
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
