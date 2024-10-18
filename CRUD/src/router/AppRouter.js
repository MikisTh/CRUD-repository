import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/header';
import AddFood from '../components/AddFood';
import FoodList from '../components/FoodList';
import useLocalStorage from '../hooks/useLocalStorage';
import FoodsContext from '../context/FoodsContext';

const AppRouter = () => {
  const [foods, setFoods] = useLocalStorage('foods', []);
  return (   
        <BrowserRouter>
          <div>
            <Header />
            <div className="main-content">
              <FoodsContext.Provider value={{ foods, setFoods }}>
                <Switch>
                  <Route component={FoodList} path="/" exact={true} />
                  <Route component={AddFood} path="/add" />
                  <Route component={EditFood} path="/edit/:id" />
                  <Route component={() => <Redirect to="/" />} />
                </Switch>
              </FoodsContext.Provider>
            </div>
          </div>
        </BrowserRouter>
      );
    };
  );
};

export default AppRouter;

