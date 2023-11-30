import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(id);
  useEffect(function () {
    axios
      .get(
        `https://90c0e3b5-9a21-4c91-b303-f52ffff433ae.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        console.log(result);
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);
  console.log(product);
  return (
    <div>
      <div id="image-box">
        <img src={product.imageUrl} />
      </div>
    </div>
  );
};

export default ProductPage;
