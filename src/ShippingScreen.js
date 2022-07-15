import React from 'react'
import { Form,Button, } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { saveShoppingAddress } from './actions';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ShippingScreen = () => {
  const [address, setAddress] = useState(saveShoppingAddress.address);
  const [city, setCity] = useState(saveShoppingAddress.city);
  const [postalCode, setPostalCode] = useState(saveShoppingAddress.postalCode);
  const [country, setCountry] = useState(saveShoppingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShoppingAddress({ address, city, postalCode, country }));
  }
  return (
    <>
      
      <Form onSubmit={submitHandler} >
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e)=>setAddress(e.target.value)}
          
            
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e)=>setCity(e.target.value)}
           
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
           required
           onChange={(e)=>setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e)=>setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
    <Link to={"/"}>
        <Button type="submit" variant="primary"
        onClick={()=> alert("successful")}>
          Continue
        </Button>
        </Link>
      </Form>
    </>
  )
};

export default ShippingScreen