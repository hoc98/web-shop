import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { addToCart } from "./actions";
import { getOnePost } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, ListGroup, Card, Button, Form, Spinner, } from "react-bootstrap";
import Product from "./Products";
const Oneproduct = () => {
  const [qty, setQty] = useState(1);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { onedata,loading } = useSelector((state) => state.onepost);

  
  useEffect(() => {
    dispatch(getOnePost(id));
  }, [id]);
 
 

  return (
    <>
    {loading ?
      <Spinner animation="border" variant="primary" >Loading...</Spinner>
      :
      <>
      
        
        <div>
          <div class="container py-4 my-4 mx-auto d-flex flex-column">
            <div class="header">
              <div class="row r1">
                <div class="col-md-9 abc">
                  <h1>{onedata.name}</h1>
                </div>
                <div class="col-md-3 text-right pqr">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p class="text-right para">{onedata.numReviews} Review</p>
              </div>
            </div>
            <div class="container-body mt-4">
              <div class="row r3">
                <div class="col-md-5 p-0 klo">
                  <ul>
                    <li>{onedata.brand}</li>
                    <li>{onedata.description}</li>
                    <li>{onedata.createdAt}</li>
                    <li>
                      rating{onedata.rating} <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>{onedata.price}</li>
                  </ul>
                </div>

                <Col md={3}>
                  <Card>
                    <ListGroup varient="flush">
                      <ListGroup.Item>
                        <Row>
                          <Col>Price: </Col>
                          <Col>
                            <strong>${onedata.price}</strong>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Status: </Col>
                          <Col>
                            <strong>
                              ${onedata.countInStock ? "In Stock" : "Out Of Stock"}
                            </strong>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      {onedata.countInStock > 0 && (
                        <ListGroup.Item>
                          <Row>
                            <Col>Quantity: </Col>
                            <Col>
                                {onedata.countInStock}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )}
                      <ListGroup.Item>
                        
                         <Button
                         type="button"
                         disabled={onedata.countInStock === 0}
                         onClick={()=>dispatch(addToCart(onedata))}
                        
                       >
                        
                         <FontAwesomeIcon icon={faPlus} />
                         ADD TO CART
                       </Button>                       
                        
                        

                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>

                <div class="col-md-7">
                  {" "}
                  <img src={onedata.image} width="90%" height="95%" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      
   </> }
    </>
  );
};

export default Oneproduct;
