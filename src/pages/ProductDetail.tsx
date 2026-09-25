import React from "react";
import { useParams } from "react-router";
import ProductsData from "../data/ProductData";

const ProductDetail = () => {
  const { id } = useParams<"id">();

  const product = ProductsData[Number(id)];

  return (
    <div className="text-white text-3xl font-bold">
      {product ? (
        <p>
          {product.title}: ¥{product.price.toLocaleString()}
        </p>
      ) : (
        <p>404: Product Not Found</p>
      )}
    </div>
  );
};

export default ProductDetail;
