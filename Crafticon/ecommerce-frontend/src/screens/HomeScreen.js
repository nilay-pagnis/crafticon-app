import { useEffect, useReducer } from "react";
//import data from "../data";
import { Link } from "react-router-dom";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_request":
      return { ...state, loading: true };
    case "fetch_success":
      return { ...state, products: action.payload, loading: false };
    case "fetch_fail":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  //const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "fetch_request" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "fetch_success", payload: result.data });
      } catch (error) {
        dispatch({ type: "fetch_fail", payload: error.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className='products'>
        { loading ? (<div>Loading...</div>) : error ? (<div>{error}</div>) :  
        (
          products.map((product) => (
            <div className='product' key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name}></img>
              </Link>
              <div className='product-info'>
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))
        )}
      </div>
     
    </div>
  );
}

export default HomeScreen;
