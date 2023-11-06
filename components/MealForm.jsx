import styles from "./styling/MealForm.module.css";

const MealForm = () => {
    return (
        <>
            <label htmlFor="meal">Meal</label>
            <input type="text" name="meal" id="meal" />
        </>
    )
};

export default MealForm;