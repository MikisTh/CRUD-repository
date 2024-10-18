import React from 'react';
import FoodForm from './FoodForm';
import { useParams } from 'react-router-dom';
import FoodsContext from '../context/FoodsContext';

const EditFood= ({ description, foods, setFoods }) => {
    const { foods, setFoods } = useContext(FoodsContext);
    const { id } = useParams();
    const foodToEdit = foods.find((food) => food.id === id);

    const handleOnSubmit = (food) => {
        const filteredFoods = foods.filter((food) => food.id !== id);
        setFoods([food, ...filteredFoods]);
        description.push('/');
  };

  return (
    <div>
      <FoodForm food={foodToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditFood;