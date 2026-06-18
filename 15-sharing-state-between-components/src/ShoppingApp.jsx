import {useState} from "react"

const product = [
    {
        id:1,
        name: "React Book"
    },
    {
        id:2,
        name: "Keyboard"
    }
]
export const ShoppingApp = () => {

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
    setCart((prev) => {
        const exists = prev.find((i) => i.id === product.id);
        if (exists) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
        return [...prev, { ...product, qty: 1 }];
    });
};

    return (
       <div>
             <h2>Shopping App</h2><br/>
            <ProductList onAdd={addToCart} />
            <Cart cart={cart}/>
       </div>
    );
}

const ProductList = ({onAdd}) => (
        <div>
        {
            product.map((p) => (
                <div key = {p.id}>
                    <span>{p.name}</span>
                    <button onClick={() => onAdd(p)}>Add</button>
                </div>
            ))
        }
    </div>
)

const Cart = ({cart}) => (
        <div>
        {
            cart.map((i) => (
                <div key={i.id}>
                    {i.name} : {i.qty}
                </div>
            ))
        }
    </div>
)