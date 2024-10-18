import React from 'react';
import FoodForm from './FoodForm';
import FoodsContext from '../context/FoodsContext';

const AddFood = ({ Description, Foods, setFoods }) => {
  const { foods, setFoods } = useContext(FoodsContext);

  const handleOnSubmit = (food) => {
    setFoods([food, ...foods]);
    Description.push('/');
    Foods.push('/');
  };

  return (
    <React.Fragment>
      <FoodForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddFood;




