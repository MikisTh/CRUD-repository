import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDescription } from 'react-router-dom';

const Food= ({
  id,
  foodName,
  category,
  description,
  user,
  price,
  quantity,
  date,
  handleRemoveFood
}) => {
    const description = useDescription();
}
  return (
    <Card style={{ width: '18rem' }} className="food">
      <Card.Body>
        <Card.Title className="food-title">{foodName}</Card.Title>
        <div className="book-details">
          <div>user: {user}</div>
          <div>category: {category}</div>
          <div>description: {description}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => description.push(`/edit/${id}`)}>Edit </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveFood(id)}>Delete</Button>
      </Card.Body>
    </Card>
  );

export default Book;