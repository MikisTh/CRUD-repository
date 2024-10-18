import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const FoodForm = (props) => {
  const [food, setFood] = useState({
    foodName: props.food ? props.food.foodName : '',
    category: props.food ? props.food.category : '',
    description: props.food ? props.food.description : '',
    quantity: props.food ? props.food.quantity : '',
    price: props.food ? props.food.price : '',
    date: props.food ? props.food.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { foodName, category, description, user, price, quantity } = food;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [foodName, category, description, user, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const food = {
        id: uuidv4(),
        foodName,
        category,
        description,
        user,
        price,
        quantity,
        date: new Date()
      };
      props.handleOnSubmit(food);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setFood((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setFood((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setFood((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Food Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="foodName"
            value={foodName}
            placeholder="Enter name of food"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="user">
          <Form.Label>Food user</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="user"
            value={user}
            placeholder="Enter name of user"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category(kg/g)</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="category"
            value={category}
            placeholder="Enter available category"
            onChange={handleInputChange}
          />
           <Form.Group controlId="description">
          <Form.Label>Description(kg/g)</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Enter available description"
            onChange={handleInputChange}
          />
        <Form.Group controlId="quantity">
          <Form.Label>Quantity(kg/g)</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>food Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of food"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FoodForm;