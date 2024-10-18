import React, { useContext } from 'react';
import _ from 'lodash';
import Food from './Food';
import FoodsContext from '../context/FoodsContext';



const FoodsList = ({}) => {
  const { foods, setFoods } = useContext(FoodsContext);
  
  const handleRemoveFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  return (
    <React.Fragment>
      <div className="food-list">
        {!_.isEmpty(foods) ? (
          foods.map((food) => (
            <Book key={food.id} {...food} handleRemoveFood={handleRemoveFood} />
          ))
        ) : (
          <p className="message">No foods available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default FoodsList;