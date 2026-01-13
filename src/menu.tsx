import React, { useState } from 'react'

function Menu({children}:{children:React.ReactNode}) {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <button onClick={handleClick}>Open Menu</button>
            {toggle && children}
        </div>
    )
}

export default Menu;