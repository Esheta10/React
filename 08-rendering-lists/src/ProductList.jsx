export const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: "999$"
        },
        {
            id: 2,
            name: "Tablet",
            price: "599$"
        },
        {
            id: 3,
            name: "Mobile",
            price: "499$"
        }
    ]
    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((product) => {
                    return(
                            <div key = {product.id}>
                                <h3>Item - {product.name}</h3>
                                <h3>Price - {product.price}</h3>
                                <h5>-------------------------------</h5>
                            </div>
                    );
                })
            }
        </div>
    );
}