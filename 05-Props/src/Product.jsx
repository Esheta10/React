// Destructuring
export const Product = ({title, price, inStock, categories}) => {
    return (
        <div>
            <h3>Product Name: {title}</h3>
            <h3>Product Price: {price}</h3>
            <h3>IsAvailable: {inStock ? "Yes" : "No"}</h3>
            <h3>Categories: {categories.join(",")}</h3>
        </div>
    );
}