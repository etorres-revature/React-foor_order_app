import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Meals, Delivered Directly to Your Door</h2>
      <p>
        Choose your favorit emeal from our broad selectio nof available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All of our melas are cooked with high-quality ingredients, just-in-time
        and by our culinary master chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
