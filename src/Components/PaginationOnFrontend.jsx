import { useState } from "react";
import { useEffect } from "react";

function FEPagination() {
  const [products, setProducts] = useState(0);
  // const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=100`);
    const productData = await response.json();
    setProducts(productData);
  };

  console.log(products);

  useEffect(() => {
    fetchData();
  }, []);

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const onPrevHandler = () => {
    if (page === 1) {
      return;
    } else {
      setPage((p) => p - 1);
    }
  };

  const onNextHandler = () => {
    if (page === products.products.length / 10) {
      return;
    } else {
      setPage((p) => p + 1);
    }
  };

  return (
    <div>
      <h1>Hello there, welcome to React Pagination</h1>
      <h2>Products Data</h2>
      <div className="products">
        {products?.products?.slice(page * 10 - 10, page * 10).map((product) => {
          return (
            <div key={product.id} className="product">
              <div className="product__img_container">
                <img src={product.thumbnail} alt={product.title} className="product__img" />
              </div>
              <h3>{product.title}</h3>
              <h3>Rs {product.price}/-</h3>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>

      {/* Pagination component */}
      <section style={{ border: "1px solid red", margin: "1rem 0" }}>
        {products.products?.length && (
          <div className="pagination">
            <span onClick={onPrevHandler}>⏮</span>
            {[...Array(products.products.length / 10)].map((_, i) => {
              return (
                <span
                  key={i + 1}
                  className={page === i + 1 ? "selected-page" : ""}
                  onClick={() => selectPageHandler(i + 1)}
                >
                  {i + 1}
                </span>
              );
            })}
            <span onClick={onNextHandler}>⏭</span>
          </div>
        )}
      </section>
    </div>
  );
}

export default FEPagination;
