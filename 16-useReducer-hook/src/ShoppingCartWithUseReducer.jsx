import {useReducer} from "react"

const initialState = {
    items: [], // {id, name, price, quantity}
    totalAmount: 0, // {total -> items * their respective price}
    totalItems: 0 // {total -> items in the cart}
}

const reducer = (state, action) => {
    //return new state
    switch(action.type){ // type: ADD_ITEM, REMOVE_ITEM
        case "ADD_ITEM": 
        // Two scenarios: 1. already exists in cart just update the quantity
        //                2. new item, push it into the cart 

        // 1. already exists in cart just update the quantity
        const existingItemsIndex = state.items.findIndex((item) =>
            item.id === action.payload.id
        )
        let updatedItems;
        if(existingItemsIndex >= 0){
            updatedItems = [...state.items]; // object ki copy banao
            updatedItems[existingItemsIndex] = { // existing item ko dhundho, uski copy banao and then value update karo
                ...updatedItems[existingItemsIndex],
                quantity: updatedItems[existingItemsIndex].quantity + 1,
            };
        }else
        // 2. new item, push it into the cart 
        {
            updatedItems = [...state.items, {
                ...action.payload,
                quantity:1
                },
            ]
        } 
        return {
            ...state,
            items: updatedItems, 
            totalItems: updatedItems.reduce((total, item) => total + item.quantity, 0),
            totalAmount: updatedItems.reduce((total,item) => total + item.quantity*item.price, 0),
        };

        case "REMOVE_ITEM": {
            // return all the items in a new array whose id doesn't match with payload id
            const filteredItems = state.items.filter((item) => item.id !== action.payload.id)
            return {
                ...state,
                items: filteredItems,
                totalAmount: filteredItems.reduce((total, item) => {
                    return total + item.price * item.quantity;
                },0),
                totalItems: filteredItems.reduce((total, item) => {
                    return total + item.quantity;
                }, 0)
            };
        };
        
        case "UPDATE_QUANTITY": {
            if(action.payload.quantity === 0){
                return reducer(state, {
                    type: "REMOVE_ITEM",
                    payload: {id: action.payload.id}
                });
            }
            const updatedQuantityItems = state.items.map((item) => 
            item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item)

            return {
                ...state,
                items: updatedQuantityItems,
                totalAmount: updatedQuantityItems.reduce((total, item) => {
                    return total + item.price * item.quantity;
                },0),
                totalItems: updatedQuantityItems.reduce((total, item) => {
                    return total + item.quantity;
                }, 0)
            };
        }
        case "CLEAR_CART": return initialState;
        default: return state;
    }
};
export const ShoppingCartWithUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const products = [
        { 
            id: 1,
            name: "React Course",
            price: 39.99
        },
        {
            id:2,
            name: "Node.js Course",
            price: 49.99
        },
        {
            id:3,
            name: "JavaScript Bundle",
            price: 69.99
        }
    ]
    return (
        <div>
            <h2>Products</h2>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h3>
                        {product.name} - ${product.price}
                        </h3>
                        <button onClick={() => dispatch({
                            type: "ADD_ITEM",
                            payload: product
                        })}>Add to Cart</button>
                        
                    </div>
                ))
            }
            <div>
               <h2>Shopping Cart</h2>
               {state.items.length === 0 ?  <p>"Your cart is empty"</p> : (
                    <div>
                        {state.items.map((item) => (
                            <div key={item.id}>
                                <p>{item.name} - ${item.price} * {item.quantity}</p>
                                <button onClick={() => dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: {id: item.id, quantity: item.quantity - 1}
                                })}>-</button>
                                 <button onClick={() => dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: {id: item.id, quantity: item.quantity + 1}
                                })}>+</button>
                                <button onClick={() => dispatch({
                                    type: "REMOVE_ITEM",
                                    payload: {id: item.id}
                                })}>Remove Item</button>
                            </div>
                        ))}
                    </div>
                )}
                <h3>Total Items: {state.totalItems}</h3>
                <h3>Total Price: {state.totalAmount.toFixed(2)}</h3> 
    
                {
                    state.items.length > 0 && (<button onClick={() => dispatch({type: "CLEAR_CART"})}>Clear Cart</button>)
                }
            </div>
        </div>
    );
}