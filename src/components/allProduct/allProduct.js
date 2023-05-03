import React, { useState, useEffect } from "react";

function AllProduct({ searchKeyword, categoryId }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8083/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
<<<<<<< HEAD
=======
        setFilteredProducts(data);
>>>>>>> b4c8915af5925ef536e1616c49658be8cc760807
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      // If categoryId is present and product's categoryId is different, exclude the product
      if (categoryId && product.category.cid !== categoryId) {
        return false;
      } // Check searchKeyword
      return product.name.toLowerCase().includes(searchKeyword.toLowerCase());
    });

    setFilteredProducts(filtered);
  }, [searchKeyword, categoryId, products]);

  return (
    <div className="single-product-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-3 col-sm-6" key={product.pid}>
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src={product.image} alt="" />
                </div>
                <h2>
                  <a href={"/detail?id=" + product.pid}>{product.name}</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>{product.price}$</ins>
                </div>
                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    href={"/detail?id=" + product.pid}
                  >
                    Xem
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="product-pagination text-center">
              <nav>
                <ul className="pagination">
                  <li>
                    <a href="a" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li>
                    <a href="a">1</a>
                  </li>
                  <li>
                    <a href="a">2</a>
                  </li>
                  <li>
                    <a href="a">3</a>
                  </li>
                  <li>
                    <a href="a">4</a>
                  </li>
                  <li>
                    <a href="a">5</a>
                  </li>
                  <li>
                    <a href="a" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
