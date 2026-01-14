import React, { useState } from 'react'
import Store from './store';
import Navbar from './navbar';
import cartCountContext from './cartContext';

function Storepage() {
    const [cartCount, setCartCount] = useState(0)
    return (
        <>
            <cartCountContext.Provider value={{ cartCount, setCartCount }}>
                <Navbar />
                <Store />
            </cartCountContext.Provider>
        </>
    )
}

export default Storepage;