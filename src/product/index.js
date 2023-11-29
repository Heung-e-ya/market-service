import React from "react";
import { useParams } from "react-router";
const ProductPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>상품페이지 {id} 입니다.</h1>
    </div>
  );
};

export default ProductPage;
