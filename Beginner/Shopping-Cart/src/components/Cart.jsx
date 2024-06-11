import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/slice/cartSlice";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.productData);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((total, item) => {
    return Math.round(total + item.price * item.quantity);
  }, 0);
  const totalQty = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const totalItems = cartItems.length;

  function handleDelete(id) {
    dispatch(removeItem(id));
  }

  function handleQuantityChange(id, quantity) {
    dispatch(updateQuantity({ id, quantity: Number(quantity) }));
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="total text-2xl font-lg flex flex-col  md:flex-row justify-between items-center">
        <span>Total Items: {totalItems}</span>
        <span>Qty: {totalQty}</span>
        <span>Rs. {totalAmount}</span>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            className="flex flex-col md:flex-row items-center justify-between p-4 my-3 border-2 border-gray-600 rounded-md bg-gray-600 text-gray-100"
            key={item.id}
          >
            <h1 className="text-center md:w-1/3 text-sm md:text-lg mb-2 md:mb-0">
              {item.title}
            </h1>
            <div className="flex items-center  md:w-1/3 md:ml-2 mt-2 md:mt-0 md:ml-20">
              <label htmlFor={`quantity-${item.id}`} className="mr-2">
                Quantity
              </label>
              <input
                id={`quantity-${item.id}`}
                className="w-10 bg-inherit md:w-16 p-2 bg-gray-500 text-gray-100 text-center rounded"
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              />
            </div>
            <div className="flex items-center gap-20 md:w-1/3 justify-end mt-2 md:mt-0">
              <b className="mr-5 order-1">Rs. {item.price}</b>
              <button
                className="p-2 bg-red-500 text-gray-100 rounded hover:bg-red-600 order-2"
                onClick={() => handleDelete(item.id)}
              >
                <RiDeleteBin2Fill />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center mt-6">
          <h1 className="text-4xl text-red-500">Your Cart is Empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
