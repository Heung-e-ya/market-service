import axios from "axios";
import "./index.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../config/constants";
import dayjs from "dayjs";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  console.log(id);
  useEffect(function () {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then(function (result) {
        console.log(result);
        setProduct(result.data.product);
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
        <img src={`${API_URL}/${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">
          {dayjs(product.createdAt).format("YYYY년 MM월 DD일")}
        </div>

        <pre id="description">{product.description}</pre>
      </div>
    </div>
  );
};

export default ProductPage;
