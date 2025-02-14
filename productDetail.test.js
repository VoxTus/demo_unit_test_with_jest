// productDetail.test.js

const { addProduct, updateProduct, deleteProduct, products } = require('./productDetail');

test('Thêm sản phẩm', () => {
    const product = addProduct('Laptop', 1000);
    expect(products).toContainEqual(product);
});

test('Sửa sản phẩm', () => {
    const product = addProduct('Phone', 500);
    const updatedProduct = updateProduct(product.id, 'Smartphone', 700);
    expect(updatedProduct).toMatchObject({ name: 'Smartphone', price: 700 });
});

test('Xóa sản phẩm', () => {
    const product = addProduct('Tablet', 300);
    const result = deleteProduct(product.id);
    expect(result).toBe(true);
    expect(products).not.toContainEqual(product);
});
