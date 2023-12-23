import { useEffect, useState } from 'react';
import styles from './styling/Meal.module.css'
import axios from 'axios';

const Meal = ({query}) => {

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState([]);

    const baseUrl = new URL("https://api.api-ninjas.com/v1/nutrition");
    const params = {
        query: query
    }
    const searchParams = new URLSearchParams(params);
    baseUrl.search = searchParams;

    const options = {
        "method": "GET",
        "headers": {
            'X-Api-Key': import.meta.env.VITE_API_NINJA_KEY
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            if (query) {
                try {
                    setLoading(true);
                    const response = await axios.get(baseUrl, options);
                    setResponse(response.data);
                    console.log(response.data);
                } catch(error) {
                    console.log(error.message)
                } finally {
                    setLoading(false);
                }
            }
        }
        fetchData()
    }, [query])

    if (!query) {
        return (
            <div className={styles.center}>
                <i className={`fa-solid fa-arrow-up ${styles.arrow_up}`}></i>
                <p>Look for a meal and check its nutritional value.</p>
            </div>
        )
    }

    return (
        <div className={styles.meal_name}>
            {loading ?
            "Loading..." :
            <div className={styles.meal_card}>
                {response.length === 0 ?
                "No results found. Please try again." :
                response[0]?.name &&
                <>
                    <h2>{response[0]?.name.split('')[0].toUpperCase() + response[0]?.name.slice(1) + ` (${response[0]?.serving_size_g}g)`}</h2>
                    <div className={styles.meal_details}>
                        <li>{`Calories: ${response[0]?.calories}`}</li>
                        <li>{`Carbohydrates: ${response[0]?.carbohydrates_total_g}g`}</li>
                        <li>{`Cholesterol: ${response[0]?.cholesterol_mg}mg`}</li>
                        <li>{`Saturated fats: ${response[0]?.fat_saturated_g}g`}</li>
                        <li>{`Total fats: ${response[0]?.fat_total_g}g`}</li>
                        <li>{`Potassium: ${response[0]?.potassium_mg}mg`}</li>
                        <li>{`Protein: ${response[0]?.protein_g}g`}</li>
                        <li>{`Sodium: ${response[0]?.sodium_mg}mg`}</li>
                        <li>{`Sugar: ${response[0]?.sugar_g}g`}</li>
                    </div>
                </>}
            </div>
            }
        </div>
    )
};

export default Meal;