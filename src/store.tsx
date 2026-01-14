import React, { useContext } from 'react'
import cartCountContext from './cartContext';

function ItemCard({ item }: { item: { id: number, name: string } }) {
    const { setCartCount } = useContext(cartCountContext);
    return (
            <div key={item.id}>
                <h2>{item.name}</h2>
                <button onClick={() => setCartCount?.((count) => count + 1)}>Add to Cart</button>
            </div>
    )
}

function Store() {
    const items = [
        {
            id: 1,
            name: "item 1"
        }, {
            id: 2,
            name: "item 2"
        }
        , {
            id: 3,
            name: "item 3"
        }
        , {
            id: 4,
            name: "item 4"
        }
    ]

    return (
        <div>
            <h1>Store</h1>
            {items.map(item => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Store;