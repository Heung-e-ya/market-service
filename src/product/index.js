import axios from "axios";
import "./index.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
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
  if (product === "") {
    return (
      <>
        <h1>상품 정보를 받고 있습니다....</h1>
      </>
    );
  }
  return (
    <div>
      <div id="image-box">
        <img src={product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">10101010</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
};

export default ProductPage;
