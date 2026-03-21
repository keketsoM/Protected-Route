import { NavLink, Outlet } from "react-router-dom";
function ProductLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-3">Products</h1>
          <p>Browse our complete product catalog</p>
          <nav className="mb-3 border rounded">
            <div className="p-3">
              <div className="d-flex gap-2 flex-wrap">
                <NavLink to="/productsList" end className="btn btn-outline-success">
                  All PRODUCTS
                </NavLink>
                <NavLink
                  to="/productsList/clothing"
                  className="btn btn-outline-success"
                >
                  CLOTHING
                </NavLink>
                <NavLink
                  to="/productsList/electronics"
                  className="btn btn-outline-success"
                >
                  ELECTRONICS
                </NavLink>
                <NavLink
                  to="/productsList/books"
                  className="btn btn-outline-success"
                >
                  BOOKS
                </NavLink>
              </div>
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProductLayout;
