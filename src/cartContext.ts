import { createContext } from "react";
import React from 'react'

const cartCountContext = createContext<{
    cartCount: number,
    setCartCount: React.Dispatch<React.SetStateAction<number>>
}>({
    cartCount: 0,
    setCartCount: () => {}
}
);

export default cartCountContext