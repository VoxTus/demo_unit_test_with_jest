// productDetail.js

const products = [];

// Thêm sản phẩm
function addProduct(name, price) {
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    const product = { id, name, price };
    products.push(product);
    return product;
}

// Sửa sản phẩm
function updateProduct(id, newName, newPrice) {
    const product = products.find(p => p.id === id);
    if (!product) return null;
    product.name = newName;
    product.price = newPrice;
    return product;
}

// Xóa sản phẩm
function deleteProduct(id) {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return false;
    products.splice(index, 1);
    return true;
}

module.exports = { addProduct, updateProduct, deleteProduct, products };
