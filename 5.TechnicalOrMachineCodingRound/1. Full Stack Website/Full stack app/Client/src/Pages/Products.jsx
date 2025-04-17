import React, { useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            description: "Description of Product 1",
            price: 29.99,
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description of Product 2",
            price: 49.99,
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description of Product 3",
            price: 19.99,
        },
    ]);

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-8">
            <h1 className="text-2xl font-bold mb-4">Products Page</h1>
            <p className="mb-6">Here you can view the list of products.</p>
            <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="product-item bg-white p-4 rounded shadow"
                    >
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-green-500 font-bold">Price: ${product.price}</p>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
