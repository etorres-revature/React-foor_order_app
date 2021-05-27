import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { DUMMY_MEALS } from "./dummy-meals";

import styles from "./AvailableMeals.module.css";

console.log("dummy meals: ", DUMMY_MEALS);

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
