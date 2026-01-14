import cartCountContext from "./cartContext";
import { useContext } from "react";
const Navbar = () => {
const {cartCount} = useContext(cartCountContext);
    return (
        <nav style={
            {
                display: "flex", justifyContent: "space-between", padding: "1rem", borderBottom: "1px solid #cccc"
            }
        }>
            <h1>Navbar</h1>
            <div>
                Cart Count :{cartCount}
            </div>
        </nav>
    )
}

export default Navbar;