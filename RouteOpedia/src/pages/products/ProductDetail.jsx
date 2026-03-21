import { Link, useParams } from "react-router-dom";
import { allProducts } from "../../data/Product";
function ProductDetail() {
  const { id } = useParams();

  const product = allProducts.find((p) => p.id == parseInt(id));
  if (product) {
    return (
      <div className="m-3 p-3 border">
        <Link to="/productsList" className="btn btn-outline-success my-2">
          Back to Products
        </Link>
        <h1>{product.name}</h1>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p>Dynamic route with ID: {id}</p>
      </div>
    );
  } else {
    return (
      <div className="m-3 p-3 border">
        <h1>Product not found</h1>
        <p>Product with ID "{id}" doesn't exist.</p>
        <Link to="/productsList" className="btn btn-outline-success my-2">
          Back to Products
        </Link>
      </div>
    );
  }
}

export default ProductDetail;
