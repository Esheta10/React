import {useState} from "react"

//Parent component
export const ShoppingApp = () => {

    const [cartItems, setCartItems] = useState({
        reactCourse: 0,
        vueCourse: 0
    })

    const handleAddReactCourse = () => {
        setCartItems({
            ...cartItems, 
            reactCourse: cartItems.reactCourse + 1,
        });
    }
    const handleAddVueCourse = () => {
        setCartItems({
            ...cartItems,
            vueCourse: cartItems.vueCourse + 1,
        });
    } 

    const price = {
        reactCourse: 49.99,
        vueCourse: 39.99
    }
    return (
        <div>
            <h2>Shopping App Component</h2>
            <ProductCard
                name="React Course"
                price= {price.reactCourse}
                quantity= {cartItems.reactCourse}
                onAddToCart= {handleAddReactCourse}
            />
            <ProductCard
                name= "Vue Course"
                price= {price.vueCourse}
                quantity= {cartItems.vueCourse}
                onAddToCart= {handleAddVueCourse}
            />
            <Cart cartItems={cartItems} price={price}/>
        </div>
    );
}

//Child Component
const ProductCard = ({name, price, quantity, onAddToCart}) => {


    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={onAddToCart}>Add To Cart</button>
        </div>
    );
}

//Child Component
export const Cart = ({cartItems, price}) => {

    const totalItems = cartItems.reactCourse + cartItems.vueCourse;
    const totalPrice = cartItems.reactCourse * price.reactCourse 
                    + cartItems.vueCourse*price.vueCourse
    return (
        <div>
            <h3>Cart Summary</h3>
            <p>Total items: {totalItems}</p>
            <p>Total price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
}