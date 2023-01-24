import React from 'react';

const CartContext = React.createContext({
    items:[],
    addItem: (props)=>{},
    removeItem: (props)=>{}
});

export default CartContext;