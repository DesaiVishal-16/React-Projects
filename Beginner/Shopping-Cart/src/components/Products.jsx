import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addItem } from "../redux/slice/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.data);
  const isLoading = useSelector((state) => state.cart.isLoading);
  const isError = useSelector((state) => state.cart.isError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Products Loading...</div>;
  }
  if (isError) {
    return <div>Error Loading Products</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {products &&
        products.map((product) => (
          <div
            className="border-2 border-gray-100 bg-gray-700 rounded-lg flex flex-col text-gray-300 items-center gap-5 py-2 pl-4"
            key={product.id}
          >
            <h1
              title={product.title}
              className="text-xl text-center line-clamp-1"
            >
              {product.title}
            </h1>
            <img className="size-40" src={product.image} alt="product-img" />
            <p
              title={product.description}
              className="text-lg text-wrap line-clamp-3"
            >
              {product.description}
            </p>
            <p className="flex gap-40 text-xl">
              <b>
                Rating:{" "}
                <span className="text-blue-500 pl-2">
                  {product.rating?.rate}
                </span>
              </b>
              <b>
                Price: Rs.
                <span className="text-blue-500 pl-2">{product.price}</span>
              </b>
            </p>
            <button
              onClick={() =>
                dispatch(
                  addItem({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                  })
                )
              }
              className="bg-blue-500 text-xl py-2 px-4 rounded-lg"
            >
              Add Item
            </button>
          </div>
        ))}
    </div>
  );
};

export default Products;
