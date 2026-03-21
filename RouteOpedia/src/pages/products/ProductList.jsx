import { Link } from "react-router-dom";
import { allProducts } from "../../data/Product";

function ProductList({ filterType, title, description }) {
  const getFilteredProducts = () => {
    if (filterType === "all") {
      return allProducts;
    }
    return allProducts.filter((p) => p.category === filterType);
  };
  return (
    <div className="py-2">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="mt-3">
        {getFilteredProducts().map((product) => {
          return (
            <div key={product.id} className="border rounded p-3 mb-3">
              <h3>{product.name}</h3>
              <p>Price: R{product.price}</p>
              <p>{product.category}</p>
              <Link
                to={`/productsList/productDetail/${product.id}`}
                className="btn btn-outline-success"
              >
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
