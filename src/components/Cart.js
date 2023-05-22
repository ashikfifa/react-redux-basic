import { useDispatch, useSelector } from "react-redux";
import { addItem, deletItem } from "./ActionItem";


const Cart = () => {
    const state=useSelector((state)=>state);
    const dispatch=useDispatch()
  return (
    <div>
      <p style={{textAlign:"center"}}>Shopping Cart {state.noOfItem}</p>
      <div style={{display:"flex"}}>
        <button onClick={()=>{dispatch(addItem())}}>Add Item to the cart</button>
        <button onClick={()=>{dispatch(deletItem())}}>Remove item to the cart</button>
      </div>
    </div>
  );
};

export default Cart;
