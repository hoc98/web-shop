import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


import { useSelector } from "react-redux";
import { getAllProducts } from "./actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Product = () => {

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allProduct);
  useEffect(() => {
    if(posts.length){return}else{
      dispatch(getAllProducts());
    }
    
  }, [dispatch]);

  return (
    <>
    {posts.map((item, index)=>
      <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row">
          <div class="col-md-10">
            <div class="row p-2 bg-white border rounded">
              <div class="col-md-3 mt-1">
                <img
                  class="img-fluid img-responsive rounded product-image"
                  src={item.image}
                />
              </div>
              <div class="col-md-6 mt-1">
                <h5>{item.name}</h5>
                <div class="d-flex flex-row">
                  <span>{item.brand}</span>
                </div>
                <div class="mt-1 mb-1 spec-1">
                  <span>{item.countInStock}</span>
                  <span class="dot"></span>
                </div>
                <div class="mt-1 mb-1 spec-1">
                  <span>{item.description}</span>
                </div>
                <p class="text-justify text-truncate para mb-0">
                  <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                      <h4 class="mr-1">${item.price}</h4>
                    </div>
                    <h6 class="text-success">
                      {item.rating} <FontAwesomeIcon icon={faStar} />
                    </h6>
                    <div class="d-flex flex-column mt-4">
                      <Link to={item._id}>
                        <button class="btn btn-primary btn-sm" type="button">
                          Open
                        </button>
                      </Link>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    

    </>
  );
};
export default Product;
